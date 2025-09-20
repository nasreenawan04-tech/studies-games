
import { useState, useMemo } from 'react';
import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tools } from '@/data/tools';
import { ArrowLeft, Play } from 'lucide-react';
import { useLocation } from 'wouter';

const ToolPage = () => {
  const [, params] = useRoute('/games/:toolId');
  const [, setLocation] = useLocation();
  const toolId = params?.toolId;

  const tool = useMemo(() => {
    return tools.find(t => t.id === toolId);
  }, [toolId]);

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
    // For demo purposes, show an alert. In a real implementation, 
    // this would launch the actual game
    alert(`Loading ${tool.name}... This is a demo - the actual game would launch here!`);
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
        <meta name="description" content={`Play ${tool.name}: ${tool.description}. Free educational game - no registration required.`} />
        <meta name="keywords" content={`${tool.name}, educational games, ${tool.category} games, free learning games`} />
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
                    {tool.description} This educational game is designed to make learning fun and engaging while building essential skills in {tool.category}.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Free to play - no registration required</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Educational and engaging gameplay</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Works on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-neutral-700">Suitable for all skill levels</span>
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
                      <span className="font-medium text-neutral-700">Difficulty:</span>
                      <span className="text-neutral-600">Adaptive</span>
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
                  Getting started with {tool.name} is easy! Follow these simple steps to begin your learning adventure.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Click Play</h3>
                  <p className="text-neutral-600">
                    Simply click the "Play Game Now" button to start the game instantly in your browser.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Follow Instructions</h3>
                  <p className="text-neutral-600">
                    The game will provide clear instructions and tutorials to help you understand the rules.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Learn & Play</h3>
                  <p className="text-neutral-600">
                    Enjoy the game while building your skills and knowledge in {tool.category}.
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

export default ToolPage;
