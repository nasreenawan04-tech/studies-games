
import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Timer, Trophy, RotateCcw, Play, Pause, Calculator, Zap, Target, Star, ArrowLeft, Brain, TrendingUp } from 'lucide-react';
import { useLocation } from 'wouter';
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

const MathSpeedChallengePlay = () => {
  const [, setLocation] = useLocation();
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
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

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
    setFeedback(null);
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
    setFeedback(null);
    setCurrentQuestion(null);
  };

  const handleAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return;

    const isCorrect = parseInt(userAnswer) === currentQuestion.answer;
    setQuestionsAnswered(prev => prev + 1);
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => prev + 1);
      const points = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
      const streakBonus = streak >= 5 ? Math.floor(streak / 5) : 0;
      setScore(prev => prev + points + streakBonus);
    } else {
      setStreak(0);
    }

    // Clear feedback after a short delay and generate new question
    setTimeout(() => {
      setFeedback(null);
      setUserAnswer('');
      setCurrentQuestion(generateQuestion());
    }, 500);
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
  const questionsPerMinute = Math.round(questionsAnswered * (60 / (60 - timeLeft)) || 0);

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'easy': return 'from-green-500 to-green-600';
      case 'medium': return 'from-blue-500 to-blue-600';
      case 'hard': return 'from-red-500 to-red-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getPerformanceLevel = () => {
    if (accuracy >= 90) return { level: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' };
    if (accuracy >= 75) return { level: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (accuracy >= 60) return { level: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'Needs Practice', color: 'text-red-600', bg: 'bg-red-50' };
  };

  return (
    <>
      <Helmet>
        <title>Play Math Speed Challenge | DapsiGames</title>
        <meta name="description" content="Play the Math Speed Challenge game now! Test your mental math skills in this fast-paced arithmetic challenge." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />

        <main className="flex-1 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Game Info Button */}
            <div className="mb-6">
              <button
                onClick={() => setLocation('/games/math-speed-challenge')}
                className="inline-flex items-center text-neutral-600 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Game Info
              </button>
            </div>

            {/* Game Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Math Speed Challenge
              </h1>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Challenge your mental math skills and build mathematical fluency
              </p>
            </div>

            {/* Game Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{score}</div>
                <div className="text-sm text-neutral-600">Score</div>
              </Card>
              <Card className={`p-4 text-center bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg ${timeLeft <= 10 ? 'ring-2 ring-red-400 animate-pulse' : ''}`}>
                <Timer className={`w-6 h-6 mx-auto mb-2 ${timeLeft <= 10 ? 'text-red-500' : 'text-blue-500'}`} />
                <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-neutral-800'}`}>{timeLeft}s</div>
                <div className="text-sm text-neutral-600">Time Left</div>
              </Card>
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                <Target className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">{accuracy}%</div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </Card>
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
                <Star className={`w-6 h-6 mx-auto mb-2 ${streak >= 5 ? 'text-yellow-500 animate-pulse' : 'text-purple-500'}`} />
                <div className="text-2xl font-bold text-neutral-800">{streak}</div>
                <div className="text-sm text-neutral-600">Streak</div>
              </Card>
            </div>

            {/* Main Game Area */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 rounded-3xl">
              {gameState === 'waiting' && (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Calculator className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 mb-4">Ready to Challenge Your Mind?</h2>
                  <p className="text-neutral-600 mb-8 text-lg">
                    Select your difficulty level and prepare for 60 seconds of intensive mental math training!
                  </p>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-neutral-700 mb-4">Choose Your Challenge Level</label>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      {(['easy', 'medium', 'hard'] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setDifficulty(level)}
                          className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:-translate-y-1 ${
                            difficulty === level
                              ? `bg-gradient-to-r ${getDifficultyColor(level)} text-white shadow-lg`
                              : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-gray-200'
                          }`}
                        >
                          <div className="text-lg capitalize">{level}</div>
                          <div className="text-sm opacity-80">
                            {level === 'easy' && 'Numbers 1-20 • 1pt each'}
                            {level === 'medium' && 'Numbers 1-50 • 2pts each'}
                            {level === 'hard' && 'Numbers 1-100 • 3pts each'}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="text-sm text-neutral-500 mt-4">
                      💡 Earn bonus points for answer streaks of 5+
                    </div>
                  </div>

                  <Button 
                    onClick={startGame} 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Start Challenge
                  </Button>
                </div>
              )}

              {gameState === 'playing' && currentQuestion && (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="mb-8">
                    <div className="flex justify-center items-center mb-4">
                      <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getDifficultyColor(difficulty)} text-white`}>
                        {difficulty.toUpperCase()} MODE
                      </div>
                    </div>
                    <div className={`text-7xl font-bold text-neutral-800 mb-8 transition-all duration-300 ${
                      feedback === 'correct' ? 'text-green-600 scale-110' : 
                      feedback === 'incorrect' ? 'text-red-600 scale-95' : ''
                    }`}>
                      {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
                    </div>
                  </div>
                  
                  <div className="max-w-xs mx-auto mb-8">
                    <Input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Your answer"
                      className={`text-center text-3xl h-20 border-2 rounded-2xl transition-all duration-200 ${
                        feedback === 'correct' ? 'border-green-400 bg-green-50' :
                        feedback === 'incorrect' ? 'border-red-400 bg-red-50' :
                        'border-gray-300 focus:border-blue-500'
                      }`}
                      autoFocus
                      disabled={feedback !== null}
                    />
                    {feedback && (
                      <div className={`mt-2 text-lg font-semibold ${
                        feedback === 'correct' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {feedback === 'correct' ? '✓ Correct!' : `✗ Incorrect (${currentQuestion.answer})`}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button 
                      onClick={handleAnswer} 
                      size="lg"
                      disabled={!userAnswer.trim() || feedback !== null}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl"
                    >
                      Submit Answer
                    </Button>
                    <Button 
                      onClick={pauseGame} 
                      variant="outline" 
                      size="lg"
                      className="px-6 py-3 border-2 border-gray-300 hover:border-blue-500 rounded-xl"
                    >
                      <Pause className="w-5 h-5 mr-2" />
                      Pause
                    </Button>
                  </div>

                  {/* Live Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-blue-600">{questionsAnswered}</div>
                      <div className="text-xs text-blue-600">Questions</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-purple-600">{questionsPerMinute}/min</div>
                      <div className="text-xs text-purple-600">Rate</div>
                    </div>
                  </div>
                </div>
              )}

              {gameState === 'paused' && (
                <div className="text-center max-w-xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Pause className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 mb-4">Game Paused</h2>
                  <p className="text-neutral-600 mb-8">Take a moment to rest, then continue your challenge!</p>
                  <div className="flex justify-center gap-4">
                    <Button 
                      onClick={pauseGame} 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-3 rounded-xl"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Resume
                    </Button>
                    <Button 
                      onClick={resetGame} 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-gray-300 hover:border-red-500 px-8 py-3 rounded-xl"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Restart
                    </Button>
                  </div>
                </div>
              )}

              {gameState === 'finished' && (
                <div className="text-center max-w-3xl mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-neutral-800 mb-4">Challenge Complete!</h2>
                  
                  {score > bestScore && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-4 mb-8 inline-block">
                      <p className="text-yellow-800 font-bold text-lg">🎉 New Personal Best!</p>
                    </div>
                  )}

                  {/* Performance Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-600">{score}</div>
                      <div className="text-sm font-medium text-blue-700">Final Score</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-green-600">{correctAnswers}/{questionsAnswered}</div>
                      <div className="text-sm font-medium text-green-700">Correct Answers</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-purple-600">{accuracy}%</div>
                      <div className="text-sm font-medium text-purple-700">Accuracy</div>
                    </div>
                  </div>

                  {/* Performance Analysis */}
                  <div className="mb-8">
                    <div className={`inline-block px-6 py-3 rounded-full font-semibold ${getPerformanceLevel().bg} ${getPerformanceLevel().color}`}>
                      Performance: {getPerformanceLevel().level}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      onClick={startGame} 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Play Again
                    </Button>
                    <Button 
                      onClick={resetGame} 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-xl"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Change Settings
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MathSpeedChallengePlay;
