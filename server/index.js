
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// In-memory data storage (replace with a real database in production)
const users = new Map();
const gameScores = new Map();
let userIdCounter = 1;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

const scoreLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10 // limit each IP to 10 score updates per minute
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Helper function to calculate user stats
const calculateUserStats = (userId) => {
  const userScores = gameScores.get(userId) || [];
  const totalScore = userScores.reduce((sum, score) => sum + score.score, 0);
  const gamesPlayed = userScores.length;
  
  return { totalScore, gamesPlayed };
};

// Authentication Routes
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Check if user already exists
    for (const [id, user] of users) {
      if (user.email === email) {
        return res.status(400).json({ message: 'Email already registered' });
      }
      if (user.username === username) {
        return res.status(400).json({ message: 'Username already taken' });
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const userId = userIdCounter++;
    const user = {
      id: userId.toString(),
      username,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      totalScore: 0,
      gamesPlayed: 0
    };

    users.set(userId, user);

    // Generate JWT
    const token = jwt.sign({ userId: user.id, username }, JWT_SECRET, { expiresIn: '30d' });

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    let foundUser = null;
    for (const [id, user] of users) {
      if (user.email === email) {
        foundUser = user;
        break;
      }
    }

    if (!foundUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, foundUser.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Update user stats
    const stats = calculateUserStats(parseInt(foundUser.id));
    foundUser.totalScore = stats.totalScore;
    foundUser.gamesPlayed = stats.gamesPlayed;

    // Generate JWT
    const token = jwt.sign({ userId: foundUser.id, username: foundUser.username }, JWT_SECRET, { expiresIn: '30d' });

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = foundUser;
    res.json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.post('/api/auth/update-score', scoreLimiter, authenticateToken, (req, res) => {
  try {
    const { gameId, score } = req.body;
    const userId = parseInt(req.user.userId);

    if (!gameId || typeof score !== 'number' || score < 0) {
      return res.status(400).json({ message: 'Invalid game ID or score' });
    }

    // Add score record
    if (!gameScores.has(userId)) {
      gameScores.set(userId, []);
    }

    gameScores.get(userId).push({
      gameId,
      score,
      timestamp: new Date().toISOString()
    });

    // Update user stats
    const user = users.get(userId);
    if (user) {
      const stats = calculateUserStats(userId);
      user.totalScore = stats.totalScore;
      user.gamesPlayed = stats.gamesPlayed;

      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Score update error:', error);
    res.status(500).json({ message: 'Server error during score update' });
  }
});

// Leaderboard Routes
app.get('/api/leaderboard/global', (req, res) => {
  try {
    const { period = 'all', limit = 10 } = req.query;
    
    // Convert users to array and calculate stats
    const leaderboard = Array.from(users.values()).map(user => {
      const stats = calculateUserStats(parseInt(user.id));
      return {
        id: user.id,
        username: user.username,
        totalScore: stats.totalScore,
        gamesPlayed: stats.gamesPlayed,
        averageScore: stats.gamesPlayed > 0 ? stats.totalScore / stats.gamesPlayed : 0,
        avatar: user.avatar
      };
    });

    // Sort by total score
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    // Add ranks
    leaderboard.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    // Apply limit
    const limitedLeaderboard = leaderboard.slice(0, parseInt(limit));

    res.json(limitedLeaderboard);
  } catch (error) {
    console.error('Leaderboard error:', error);
    res.status(500).json({ message: 'Server error fetching leaderboard' });
  }
});

app.get('/api/leaderboard/game/:gameId', (req, res) => {
  try {
    const { gameId } = req.params;
    const { period = 'all', limit = 10 } = req.query;

    // Get game-specific scores
    const gameLeaderboard = new Map();

    for (const [userId, scores] of gameScores) {
      const gameScores = scores.filter(score => score.gameId === gameId);
      if (gameScores.length > 0) {
        const totalScore = gameScores.reduce((sum, score) => sum + score.score, 0);
        const user = users.get(userId);
        
        if (user) {
          gameLeaderboard.set(userId, {
            id: user.id,
            username: user.username,
            totalScore,
            gamesPlayed: gameScores.length,
            averageScore: totalScore / gameScores.length,
            avatar: user.avatar
          });
        }
      }
    }

    // Convert to array and sort
    const leaderboard = Array.from(gameLeaderboard.values());
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    // Add ranks
    leaderboard.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    // Apply limit
    const limitedLeaderboard = leaderboard.slice(0, parseInt(limit));

    res.json(limitedLeaderboard);
  } catch (error) {
    console.error('Game leaderboard error:', error);
    res.status(500).json({ message: 'Server error fetching game leaderboard' });
  }
});

// Serve static files from the client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
