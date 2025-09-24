
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Leaderboard from '@/components/Leaderboard';
import { Trophy, Target, Star, Users } from 'lucide-react';

const LeaderboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Leaderboard - Top Players | DapsiGames</title>
        <meta name="description" content="See the top performing players on DapsiGames. Compete with students worldwide and climb the leaderboard in educational games." />
        <meta name="keywords" content="leaderboard, top players, game scores, educational games competition, student rankings" />
        <meta property="og:title" content="Leaderboard - Top Players | DapsiGames" />
        <meta property="og:description" content="See the top performing players on DapsiGames and compete for the highest scores." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsigames.com/leaderboard" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-leaderboard">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-neutral-800 mb-6">
                  Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Leaderboard</span>
                </h1>
                
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Compete with students and learners worldwide! See who's mastering educational games, 
                  track your progress, and climb the ranks to become a learning champion.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Global Competition</h3>
                    <p className="text-neutral-600 text-sm">Compete with thousands of students from around the world</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Track Progress</h3>
                    <p className="text-neutral-600 text-sm">Monitor your learning journey and see your improvement</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Earn Recognition</h3>
                    <p className="text-neutral-600 text-sm">Get recognized for your achievements and learning success</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leaderboard Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Leaderboard limit={20} />
            </div>
          </section>

          {/* How Scoring Works */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
                  How Scoring Works
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Understanding how your scores are calculated and how you can climb the leaderboard
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Play Games</h3>
                  <p className="text-neutral-600">
                    Complete educational games across math, science, language, memory, and logic categories
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Earn Points</h3>
                  <p className="text-neutral-600">
                    Get points based on accuracy, speed, and difficulty level. Better performance = more points
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Build Streaks</h3>
                  <p className="text-neutral-600">
                    Playing regularly and maintaining consistency gives you bonus points and streak multipliers
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Climb Ranks</h3>
                  <p className="text-neutral-600">
                    Your total score determines your position on the global leaderboard. Keep playing to rise!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LeaderboardPage;
