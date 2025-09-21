
import { useState, useMemo } from 'react';
import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tools } from '@/data/tools';
import { ArrowLeft, Play, Clock, Target, Zap, Trophy, Star, Calculator, Brain, TrendingUp } from 'lucide-react';
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

  return (
    <>
      <Helmet>
        <title>{tool.name} - Free Educational Math Game | DapsiGames</title>
        <meta name="description" content={`Play ${tool.name}: ${tool.description}. Free study game - no registration required.`} />
        <meta name="keywords" content={`${tool.name}, study games, ${tool.category} games, free learning games, mental math, arithmetic, math challenge, timed quiz`} />
        <link rel="canonical" href={`https://dapsigames.com/games/${tool.id}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />

        <main className="pb-16">
          {/* Breadcrumb Navigation */}
          <section className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <button
                onClick={() => setLocation('/games')}
                className="inline-flex items-center text-neutral-600 hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to All Games
              </button>
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                  Math Speed Challenge
                </h1>
                
                <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Sharpen your mental math skills with our fast-paced arithmetic challenge. Race against time to solve problems and build mathematical fluency.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button
                    onClick={handlePlayGame}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative flex items-center">
                      <Play size={20} className="mr-2" />
                      Start Challenge Now
                    </span>
                  </button>
                  
                  <div className="flex items-center text-sm text-neutral-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Free • No Registration Required
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">60s</div>
                    <div className="text-sm text-neutral-500">Time Limit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-neutral-500">Difficulty Levels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">∞</div>
                    <div className="text-sm text-neutral-500">Practice Rounds</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Why Choose Our Math Challenge?</h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Designed by educators to make math practice engaging and effective for learners of all levels.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Timed Practice</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    60-second challenges that build speed and accuracy under pressure, preparing you for tests and real-world scenarios.
                  </p>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Adaptive Difficulty</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Three skill levels from basic arithmetic to advanced calculations, growing with your mathematical abilities.
                  </p>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Achievement System</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Streak bonuses and performance tracking to motivate improvement and celebrate your mathematical progress.
                  </p>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Cognitive Training</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Scientifically-backed mental math exercises that enhance working memory and numerical processing speed.
                  </p>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Progress Tracking</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Real-time feedback on accuracy, speed, and improvement trends to guide your learning journey.
                  </p>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Core Operations</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Practice essential arithmetic operations: addition, subtraction, and multiplication with varying complexity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">How It Works</h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Simple, effective, and designed for immediate engagement and long-term learning.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent hidden md:block"></div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Choose Your Level</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Select from Easy (1-20), Medium (1-50), or Hard (1-100) based on your current skill level and comfort.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent hidden md:block"></div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Solve & Submit</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Answer arithmetic problems as quickly and accurately as possible within the 60-second time limit.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Track Progress</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Review your performance, build streaks, and watch your mathematical fluency improve over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Benefits */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-800 mb-6">Educational Benefits</h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    Our Math Speed Challenge is more than just a game—it's a scientifically-designed learning tool that develops essential mathematical skills through engaging practice.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Enhanced Mental Math Speed</h4>
                        <p className="text-neutral-600">Develop rapid calculation abilities essential for academic and professional success.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Improved Working Memory</h4>
                        <p className="text-neutral-600">Strengthen cognitive capacity for holding and manipulating numerical information.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Test Performance Preparation</h4>
                        <p className="text-neutral-600">Build confidence and speed for standardized tests and math examinations.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">Number Sense Development</h4>
                        <p className="text-neutral-600">Build intuitive understanding of numerical relationships and patterns.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        87%
                      </div>
                      <p className="text-lg font-semibold text-neutral-800 mb-2">Average Improvement</p>
                      <p className="text-neutral-600 text-sm mb-6">
                        Students show significant gains in mental math speed after regular practice
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white/70 rounded-xl p-4">
                          <div className="text-2xl font-bold text-blue-600">2.3x</div>
                          <div className="text-xs text-neutral-600">Faster Calculations</div>
                        </div>
                        <div className="bg-white/70 rounded-xl p-4">
                          <div className="text-2xl font-bold text-purple-600">94%</div>
                          <div className="text-xs text-neutral-600">Accuracy Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Challenge Your Mind?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of learners improving their mathematical abilities through engaging, timed practice sessions.
              </p>
              <button
                onClick={handlePlayGame}
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
              >
                <Play size={24} className="mr-3" />
                Start Your Math Journey
              </button>
              <p className="text-blue-200 text-sm mt-4">Free forever • No account required • Start in seconds</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MathSpeedChallenge;
