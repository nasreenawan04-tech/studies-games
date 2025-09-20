import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Rocket, Users, Heart, Shield, Calculator, Type, Activity, Gift, UserCheck, Smile, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - DapsiGames | Educational Gaming Platform</title>
        <meta name="description" content="Learn about DapsiGames - your trusted source for educational games. Fun, engaging, and completely free games for effective learning." />
        <meta name="keywords" content="about DapsiGames, educational games, study games, learning games" />
        <meta property="og:title" content="About Us - DapsiGames | Educational Gaming Platform" />
        <meta property="og:description" content="Learn about DapsiGames - your trusted source for educational games. Fun, engaging, and completely free." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
                About <span className="text-blue-600">DapsiGames</span>
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Transforming education through engaging, interactive study games
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-neutral-600 font-medium">Happy Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">100+</div>
                  <div className="text-neutral-600 font-medium">Study Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-2">99.9%</div>
                  <div className="text-neutral-600 font-medium">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">24/7</div>
                  <div className="text-neutral-600 font-medium">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <Rocket className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h2 className="text-4xl font-bold text-neutral-800 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  At DapsiGames, we believe that learning should be fun and engaging for everyone. 
                  Our mission is to provide interactive, educational games that transform traditional 
                  studying into enjoyable experiences that improve knowledge retention.
                </p>
                <p className="text-lg text-neutral-600">
                  We're committed to creating games that make complex subjects accessible through 
                  play-based learning, helping students of all ages achieve their educational goals.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-yellow-100 rounded-3xl p-12 shadow-inner">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Users className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">For Learners</h4>
                      <p className="text-neutral-600 text-sm">Accessible to all ages and skill levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Heart className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Always Free</h4>
                      <p className="text-neutral-600 text-sm">No hidden costs or subscriptions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Safe & Fun</h4>
                      <p className="text-neutral-600 text-sm">Your data stays secure and learning is enjoyable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                A comprehensive collection of educational games covering various subjects and skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Math Games</h3>
                <p className="text-neutral-600 mb-4">
                  Engaging games that reinforce math concepts from basic arithmetic to advanced algebra.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Addition & Subtraction</li>
                  <li>• Multiplication & Division</li>
                  <li>• Fractions & Decimals</li>
                  <li>• Algebra & Geometry</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <Type className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Language Games</h3>
                <p className="text-neutral-600 mb-4">
                  Fun and interactive games to improve vocabulary, spelling, grammar, and reading comprehension.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Vocabulary Builders</li>
                  <li>• Spelling Bees</li>
                  <li>• Grammar Quizzes</li>
                  <li>• Reading Comprehension</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Science Games</h3>
                <p className="text-neutral-600 mb-4">
                  Explore scientific concepts through interactive simulations and challenges.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Biology Quizzes</li>
                  <li>• Chemistry Experiments</li>
                  <li>• Physics Puzzles</li>
                  <li>• Earth Science Explorations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                These principles guide everything we do and every decision we make at DapsiGames.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Gift className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Free Forever</h3>
                <p className="text-neutral-600 leading-relaxed">
                  All our games are completely free to use with no hidden fees, subscriptions, or premium tiers. 
                  Quality education shouldn't cost a fortune.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Privacy First</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We respect your privacy and don't store your personal data or require account creation. 
                  Your learning journey stays yours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smile className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Engaging & Fun</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our games are designed to be fun and motivating, making learning an enjoyable experience. 
                  Play and learn!
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Effective Learning</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We focus on pedagogical principles to ensure our games enhance knowledge retention and understanding. 
                  Learn effectively with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Impact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
                Our Global Impact
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                DapsiGames serves millions of learners worldwide, from young students to lifelong learners. 
                We're proud to be part of a global community that values accessible and enjoyable education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">50M+</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Learning Sessions</h4>
                <p className="text-neutral-600">Engaging gameplay sessions completed by learners worldwide</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-4">195</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Countries Served</h4>
                <p className="text-neutral-600">Learners from almost every country engage with our games</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">100+</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Games Available</h4>
                <p className="text-neutral-600">A growing library of educational games across various subjects</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Join Our Community</h3>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Be part of a global community that believes in making learning fun and accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/games" 
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Play Study Games
                </a>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;