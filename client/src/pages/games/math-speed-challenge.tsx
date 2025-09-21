import { useState, useMemo } from 'react';
import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tools } from '@/data/tools';
import { ArrowLeft, Play } from 'lucide-react';
import { useLocation } from 'wouter';

const MathSpeedChallenge = () => {
  const [, setLocation] = useLocation();

  const tool = useMemo(() => {
    return tools.find(t => t.id === 'math-speed-challenge');
  }, []);

  if (!tool) {
    return (
      <>
        <Helmet>
          <title>Game Not Found | DapsiGames</title>
          <meta name="description" content="The educational game you're looking for could not be found." />
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center bg-neutral-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-neutral-800 mb-4">Game Not Found</h1>
              <p className="text-neutral-600 mb-6">The educational game you're looking for doesn't exist.</p>
              <button
                onClick={() => setLocation('/games')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse All Games
              </button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const handlePlayGame = () => {
    setLocation('/games/math-speed-challenge/play');
  };

  const categoryColors = {
    math: 'from-blue-500 to-blue-600',
    science: 'from-pink-500 to-pink-600',
    language: 'from-yellow-500 to-orange-600',
    memory: 'from-purple-500 to-purple-600',
    logic: 'from-green-500 to-green-600'
  };

  return (
    <>
      <Helmet>
        <title>{tool.name} - Free Educational Game | DapsiGames</title>
        <meta name="description" content={`Play ${tool.name}: ${tool.description}. Free study game - no registration required.`} />
        <meta name="keywords" content={`${tool.name}, study games, ${tool.category} games, free learning games, mental math, arithmetic, math challenge, timed quiz`} />
        <link rel="canonical" href={`https://dapsigames.com/games/${tool.id}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-neutral-50">
          {/* Breadcrumb Navigation */}
          <section className="bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <button
                onClick={() => setLocation('/games')}
                className="inline-flex items-center text-neutral-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to All Games
              </button>
            </div>
          </section>

          {/* Game Hero Section */}
          <section className={`bg-gradient-to-r ${categoryColors[tool.category]} text-white py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="text-6xl mb-6">{tool.icon}</div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{tool.name}</h1>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  {tool.description}
                </p>
                <button
                  onClick={handlePlayGame}
                  className="inline-flex items-center px-8 py-4 bg-white text-neutral-800 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Play size={20} className="mr-2" />
                  Play Game Now
                </button>
              </div>
            </div>
          </section>

          {/* Game Features Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-800 mb-6">About This Game</h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    The Math Speed Challenge is a fast-paced arithmetic game designed to improve your mental math skills. Race against time to solve addition, subtraction, and multiplication problems while building speed and accuracy. This educational game adapts to your skill level with three difficulty modes and includes streak bonuses to keep you motivated.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Free to play - no registration required</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Three difficulty levels: Easy, Medium, Hard</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">60-second timed challenges</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Streak bonuses for consecutive correct answers</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Game Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="font-medium text-neutral-700">Category:</span>
                      <span className="text-neutral-600 capitalize">{tool.category} Games</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="font-medium text-neutral-700">Time Limit:</span>
                      <span className="text-neutral-600">60 seconds</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="font-medium text-neutral-700">Difficulty:</span>
                      <span className="text-neutral-600">Easy, Medium, Hard</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="font-medium text-neutral-700">Cost:</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-neutral-700">Platform:</span>
                      <span className="text-neutral-600">Web Browser</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlayGame}
                    className={`w-full mt-8 px-6 py-4 bg-gradient-to-r ${categoryColors[tool.category]} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`}
                  >
                    Start Playing Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* How to Play Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">How to Play</h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Getting started with {tool.name} is easy! Follow these simple steps to begin your mental math training.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Choose Difficulty</h3>
                  <p className="text-neutral-600">
                    Select Easy (1-20), Medium (1-50), or Hard (1-100) based on your skill level.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Solve Problems</h3>
                  <p className="text-neutral-600">
                    Answer as many arithmetic problems as possible within the 60-second time limit.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Build Streaks</h3>
                  <p className="text-neutral-600">
                    Chain correct answers together to earn bonus points and improve your score.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Benefits of Math Speed Training</h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Regular practice with our Math Speed Challenge can significantly improve your mathematical abilities and cognitive performance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Mental Agility</h3>
                  <p className="text-neutral-600">
                    Improve your mental calculation speed and mathematical fluency through regular timed practice sessions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Focus & Concentration</h3>
                  <p className="text-neutral-600">
                    Enhance your ability to focus under pressure and maintain concentration during challenging tasks.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Academic Performance</h3>
                  <p className="text-neutral-600">
                    Build fundamental math skills that support success in mathematics, science, and standardized tests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Scoring System Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Scoring System</h2>
                <p className="text-lg text-neutral-600">
                  Understanding how points are awarded can help you maximize your score and track your progress.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Base Points</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">Easy Level</span>
                      <span className="text-green-600 font-bold">1 point per correct answer</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-800">Medium Level</span>
                      <span className="text-blue-600 font-bold">2 points per correct answer</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-800">Hard Level</span>
                      <span className="text-purple-600 font-bold">3 points per correct answer</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Bonus System</h3>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl">🔥</span>
                      <h4 className="text-lg font-bold text-neutral-800 mt-2">Streak Bonus</h4>
                    </div>
                    <p className="text-neutral-600 text-center mb-4">
                      Build streaks of consecutive correct answers to earn bonus points!
                    </p>
                    <div className="text-center">
                      <div className="inline-block bg-white rounded-lg px-4 py-2 shadow-sm">
                        <span className="text-orange-600 font-bold">
                          +1 bonus point every 5 consecutive correct answers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-16 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Tips for Success</h2>
                <p className="text-lg text-neutral-600">
                  Master these strategies to improve your performance and achieve higher scores.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Strategy Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Start with easier problems to build confidence and momentum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Look for patterns and shortcuts in calculations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Practice mental math techniques like rounding and estimation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Stay calm and don't panic if you make mistakes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6">Practice Advice</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Play regularly to improve your calculation speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Gradually increase difficulty as you improve</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Focus on accuracy first, then work on speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-neutral-600">Track your progress and celebrate improvements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Challenge Your Mind?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your math speed training journey today and see how much you can improve!
              </p>
              <button
                onClick={handlePlayGame}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Play size={24} className="mr-3" />
                Play Math Speed Challenge Now
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MathSpeedChallenge;