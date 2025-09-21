import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Rocket, Users, Heart, Shield, Calculator, Type, Activity, Gift, UserCheck, Smile, CheckCircle, Brain, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Learn More About DapsiGames</title>
        <meta name="description" content="Learn about DapsiGames' mission to provide free, engaging educational games for students and learners. Discover our story, values, and commitment to making learning fun." />
        <meta name="keywords" content="about dapsigames, mission, free educational games, study games, learning games, team" />
        <meta property="og:title" content="About Us - Learn More About DapsiGames" />
        <meta property="og:description" content="Learn about DapsiGames' mission to provide free, engaging educational games for students and learners." />
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
                Empowering millions of students and learners worldwide with free, engaging educational games 
                that make studying fun, effective, and accessible to everyone.
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-neutral-600 font-medium">Students Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">150+</div>
                  <div className="text-neutral-600 font-medium">Study Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-2">5</div>
                  <div className="text-neutral-600 font-medium">Subject Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">100%</div>
                  <div className="text-neutral-600 font-medium">Free Forever</div>
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
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <Rocket className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h2 className="text-4xl font-bold text-neutral-800 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  At DapsiGames, we believe that learning should be engaging, accessible, and fun for everyone, regardless of 
                  age or background. Our mission is to transform education through interactive games that make studying 
                  enjoyable and effective across math, science, language, memory, and logic skills.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We're committed to breaking down barriers to quality education and making excellent learning resources 
                  available to students, educators, parents, and lifelong learners everywhere - completely free, forever.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-yellow-100 rounded-3xl p-12 shadow-inner">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
                      <Users className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">For Everyone</h4>
                      <p className="text-neutral-600 text-sm">Accessible to all skill levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center">
                      <Heart className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Always Free</h4>
                      <p className="text-neutral-600 text-sm">No hidden costs or subscriptions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#6B7280] rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Privacy First</h4>
                      <p className="text-neutral-600 text-sm">Your data stays secure and private</p>
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
                A comprehensive collection of 150+ free educational games across 5 main categories, 
                designed to enhance learning and make studying enjoyable for all ages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Math Games</h3>
                <p className="text-neutral-600 mb-4">
                  Interactive games for arithmetic, algebra, geometry, and mathematical problem-solving skills.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Addition & Multiplication Games</li>
                  <li>• Fraction & Percentage Puzzles</li>
                  <li>• Algebra & Geometry Adventures</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center mb-6">
                  <Type className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Language Games</h3>
                <p className="text-neutral-600 mb-4">
                  Engaging vocabulary, spelling, grammar, and reading comprehension activities.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Vocabulary Builders</li>
                  <li>• Spelling Challenges</li>
                  <li>• Grammar Adventures</li>
                  <li>• Reading Comprehension</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Science Games</h3>
                <p className="text-neutral-600 mb-4">
                  Interactive chemistry, physics, biology, and earth science exploration games.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Periodic Table Quests</li>
                  <li>• Physics Simulations</li>
                  <li>• Biology Adventures</li>
                  <li>• Chemistry Experiments</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Memory Games</h3>
                <p className="text-neutral-600 mb-4">
                  Cognitive training games to improve memory, concentration, and mental agility.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Memory Card Matching</li>
                  <li>• Pattern Recognition</li>
                  <li>• Sequence Recall</li>
                  <li>• Brain Training</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#6B7280] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Logic & Puzzles</h3>
                <p className="text-neutral-600 mb-4">
                  Critical thinking and problem-solving games to develop logical reasoning skills.
                </p>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>• Logic Puzzles</li>
                  <li>• Pattern Games</li>
                  <li>• Strategy Challenges</li>
                  <li>• Problem Solving</li>
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
                <div className="w-20 h-20 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Gift className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Free Forever</h3>
                <p className="text-neutral-600 leading-relaxed">
                  All our educational games are completely free to use with no hidden fees, subscriptions, or premium tiers. 
                  Quality learning shouldn't cost a fortune.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#6B7280] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Privacy First</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We respect your privacy and don't store your personal data or require account creation. 
                  Focus on learning, not on sharing personal information.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smile className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">User-Friendly</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our games are designed to be intuitive and accessible to learners of all ages and abilities. 
                  Simple to play, powerful for learning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={24} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Educationally Sound</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We maintain high standards of educational quality and accuracy across all our games. 
                  Learning made right, made fun.
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
                Our Educational Impact
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                DapsiGames serves millions of students, educators, and lifelong learners worldwide. 
                We're proud to be part of a global community that values accessible education, engaging learning, and academic excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">50M+</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Games Played</h4>
                <p className="text-neutral-600">Educational games played by students and learners worldwide</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-4">195</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Countries Served</h4>
                <p className="text-neutral-600">Students from almost every country learn with our platform daily</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">1000+</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Hours Learned</h4>
                <p className="text-neutral-600">Study hours completed through engaging educational gameplay</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">Join Our Learning Community</h3>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Be part of a global community that believes in making quality education accessible and enjoyable for everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/games" 
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Start Playing Games
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