import { useParams } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { tools } from '@/data/tools';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Play, Trophy, Users, Clock } from 'lucide-react';
import { useLocation } from 'wouter';

const GamePage = () => {
  const { gameId } = useParams();
  const [, setLocation] = useLocation();

  const game = tools.find(tool => tool.id === gameId);

  if (!game) {
    return (
      <>
        <Helmet>
          <title>Game Not Found - DapsiGames</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-neutral-800 mb-4">Game Not Found</h1>
              <p className="text-neutral-600 mb-8">The game you're looking for doesn't exist.</p>
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

  return (
    <>
      <Helmet>
        <title>{game.name} - Free Educational Game | DapsiGames</title>
        <meta name="description" content={game.description} />
        <meta name="keywords" content={`${game.name}, ${game.category} games, educational games, study games`} />
        <meta property="og:title" content={`${game.name} - Free Educational Game | DapsiGames`} />
        <meta property="og:description" content={game.description} />
        <link rel="canonical" href={`https://dapsiwow.com${game.href}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-neutral-50">
          {/* Game Header */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setLocation('/games')}
                className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Games
              </button>

              <div className="text-center">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{game.name}</h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{game.description}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                    <Play className="w-5 h-5 mr-2" />
                    Start Playing
                  </button>
                  <button className="inline-flex items-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors border border-blue-400">
                    <Trophy className="w-5 h-5 mr-2" />
                    View Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Game Stats */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-neutral-600">Players</div>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <Trophy className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-600">5K+</div>
                  <div className="text-neutral-600">Games Completed</div>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-600">15min</div>
                  <div className="text-neutral-600">Average Play Time</div>
                </div>
              </div>
            </div>
          </section>

          {/* Game Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">How to Play</h2>
                <div className="prose prose-lg">
                  <p className="text-neutral-600 mb-4">
                    This {game.category} game is designed to help you learn and practice important concepts 
                    while having fun. Here's how to get started:
                  </p>
                  <ol className="text-neutral-600 space-y-2">
                    <li>1. Click the "Start Playing" button above</li>
                    <li>2. Follow the on-screen instructions</li>
                    <li>3. Complete challenges to earn points</li>
                    <li>4. Track your progress and compete with others</li>
                  </ol>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Learning Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Skills Developed</h3>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• Problem-solving abilities</li>
                      <li>• Critical thinking skills</li>
                      <li>• Subject-specific knowledge</li>
                      <li>• Pattern recognition</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">Game Features</h3>
                    <ul className="text-neutral-600 space-y-2">
                      <li>• Progressive difficulty levels</li>
                      <li>• Instant feedback system</li>
                      <li>• Achievement tracking</li>
                      <li>• Multiplayer challenges</li>
                    </ul>
                  </div>
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

export default GamePage;