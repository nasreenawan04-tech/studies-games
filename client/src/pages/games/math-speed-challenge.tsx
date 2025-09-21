
import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Timer, Trophy, RotateCcw, Play, Pause, Calculator, Zap, Target, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

const MathSpeedChallenge = () => {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'paused' | 'finished'>('waiting');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [streak, setStreak] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const generateQuestion = useCallback((): Question => {
    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let num1: number, num2: number, answer: number;
    
    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        break;
    }

    // For subtraction, ensure positive result
    if (operator === '-' && num2 > num1) {
      [num1, num2] = [num2, num1];
    }

    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '×':
        answer = num1 * num2;
        break;
      default:
        answer = 0;
    }

    return { num1, num2, operator, answer };
  }, [difficulty]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(60);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setStreak(0);
    setUserAnswer('');
    setCurrentQuestion(generateQuestion());
  };

  const pauseGame = () => {
    setGameState(gameState === 'paused' ? 'playing' : 'paused');
  };

  const resetGame = () => {
    setGameState('waiting');
    setScore(0);
    setTimeLeft(60);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setStreak(0);
    setUserAnswer('');
    setCurrentQuestion(null);
  };

  const handleAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return;

    const isCorrect = parseInt(userAnswer) === currentQuestion.answer;
    setQuestionsAnswered(prev => prev + 1);

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => prev + 1);
      const points = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
      const streakBonus = streak >= 5 ? Math.floor(streak / 5) : 0;
      setScore(prev => prev + points + streakBonus);
    } else {
      setStreak(0);
    }

    setUserAnswer('');
    setCurrentQuestion(generateQuestion());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnswer();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            if (score > bestScore) {
              setBestScore(score);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameState, timeLeft, score, bestScore]);

  const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

  return (
    <>
      <Helmet>
        <title>Math Speed Challenge - Fast-Paced Arithmetic Game | DapsiGames</title>
        <meta name="description" content="Test your mental math skills with our Math Speed Challenge! Race against time to solve arithmetic problems and improve your calculation speed with this engaging educational game." />
        <meta name="keywords" content="math speed challenge, arithmetic game, mental math, math practice, timed math quiz, educational games, calculation speed, math skills" />
        <meta property="og:title" content="Math Speed Challenge - Fast-Paced Arithmetic Game | DapsiGames" />
        <meta property="og:description" content="Race against time to solve math problems and boost your mental calculation skills!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/games/math-speed-challenge" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />

        <main className="flex-1 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-4">
                Math Speed Challenge
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Test your mental math skills! Solve as many arithmetic problems as possible in 60 seconds.
              </p>
            </div>

            {/* Game Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 text-center bg-white">
                <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{score}</div>
                <div className="text-sm text-neutral-600">Score</div>
              </Card>
              <Card className="p-4 text-center bg-white">
                <Timer className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{timeLeft}s</div>
                <div className="text-sm text-neutral-600">Time Left</div>
              </Card>
              <Card className="p-4 text-center bg-white">
                <Target className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{accuracy}%</div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </Card>
              <Card className="p-4 text-center bg-white">
                <Star className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{streak}</div>
                <div className="text-sm text-neutral-600">Streak</div>
              </Card>
            </div>

            {/* Game Area */}
            <Card className="p-8 bg-white shadow-lg mb-8">
              {gameState === 'waiting' && (
                <div className="text-center">
                  <Calculator className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">Ready to Start?</h2>
                  <p className="text-neutral-600 mb-6">
                    Choose your difficulty level and test your mental math skills!
                  </p>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-700 mb-3">Difficulty Level</label>
                    <div className="flex justify-center gap-3">
                      {(['easy', 'medium', 'hard'] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setDifficulty(level)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            difficulty === level
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                    <div className="text-sm text-neutral-500 mt-2">
                      {difficulty === 'easy' && 'Numbers 1-20, 1 point per correct answer'}
                      {difficulty === 'medium' && 'Numbers 1-50, 2 points per correct answer'}
                      {difficulty === 'hard' && 'Numbers 1-100, 3 points per correct answer'}
                    </div>
                  </div>

                  <Button onClick={startGame} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Play className="w-5 h-5 mr-2" />
                    Start Challenge
                  </Button>
                </div>
              )}

              {gameState === 'playing' && currentQuestion && (
                <div className="text-center">
                  <div className="text-6xl font-bold text-neutral-800 mb-8">
                    {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
                  </div>
                  
                  <div className="max-w-xs mx-auto mb-6">
                    <Input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter your answer"
                      className="text-center text-2xl h-16"
                      autoFocus
                    />
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button onClick={handleAnswer} size="lg">
                      Submit Answer
                    </Button>
                    <Button onClick={pauseGame} variant="outline" size="lg">
                      <Pause className="w-5 h-5 mr-2" />
                      Pause
                    </Button>
                  </div>
                </div>
              )}

              {gameState === 'paused' && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">Game Paused</h2>
                  <div className="flex justify-center gap-4">
                    <Button onClick={pauseGame} size="lg">
                      <Play className="w-5 h-5 mr-2" />
                      Resume
                    </Button>
                    <Button onClick={resetGame} variant="outline" size="lg">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Restart
                    </Button>
                  </div>
                </div>
              )}

              {gameState === 'finished' && (
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-neutral-800 mb-4">Time's Up!</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{score}</div>
                      <div className="text-sm text-neutral-600">Final Score</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{correctAnswers}/{questionsAnswered}</div>
                      <div className="text-sm text-neutral-600">Correct Answers</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">{accuracy}%</div>
                      <div className="text-sm text-neutral-600">Accuracy</div>
                    </div>
                  </div>

                  {score > bestScore && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <p className="text-yellow-800 font-medium">🎉 New Personal Best!</p>
                    </div>
                  )}

                  <div className="flex justify-center gap-4">
                    <Button onClick={startGame} size="lg">
                      <Play className="w-5 h-5 mr-2" />
                      Play Again
                    </Button>
                    <Button onClick={resetGame} variant="outline" size="lg">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Change Settings
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Game Instructions */}
            <Card className="p-8 bg-white shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">How to Play</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Game Rules</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      You have 60 seconds to solve as many problems as possible
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Choose from Easy (1-20), Medium (1-50), or Hard (1-100) difficulty
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Type your answer and press Enter or click Submit
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Build streaks of correct answers for bonus points
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Scoring System</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Easy: 1 point per correct answer
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Medium: 2 points per correct answer
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Hard: 3 points per correct answer
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Streak bonus: Extra points for consecutive correct answers
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Benefits Section */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Benefits of Math Speed Challenges</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Mental Agility</h3>
                  <p className="text-neutral-600">
                    Improve your mental calculation speed and mathematical fluency through regular practice.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Focus & Concentration</h3>
                  <p className="text-neutral-600">
                    Enhance your ability to focus under pressure and maintain concentration during timed exercises.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Academic Performance</h3>
                  <p className="text-neutral-600">
                    Build fundamental math skills that support success in mathematics, science, and standardized tests.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tips Section */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Tips for Success</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Strategy Tips</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Start with easier problems to build confidence and momentum</li>
                    <li>• Look for patterns and shortcuts in calculations</li>
                    <li>• Practice mental math techniques like rounding and estimation</li>
                    <li>• Stay calm and don't panic if you make mistakes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Practice Advice</h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Play regularly to improve your calculation speed</li>
                    <li>• Gradually increase difficulty as you improve</li>
                    <li>• Focus on accuracy first, then work on speed</li>
                    <li>• Track your progress and celebrate improvements</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MathSpeedChallenge;
