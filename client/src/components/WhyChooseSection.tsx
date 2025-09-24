import { Zap, Shield, Smartphone, Globe, Gamepad2, Trophy, Star, Target, Play, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Play",
      description: "Jump into learning instantly! No downloads, installations, or waiting. Our games load instantly and work perfectly across all devices.",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-900/30",
      decorativeEmoji: "⚡",
      gamingIcon: Target
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "Your learning journey stays completely private. We don't store personal data or track your progress - it all stays on your device.",
      color: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-900/30",
      decorativeEmoji: "🛡️",
      gamingIcon: Star
    },
    {
      icon: Smartphone,
      title: "Play Anywhere",
      description: "Game on any device! Desktop, laptop, tablet, or phone - our responsive design ensures perfect gameplay everywhere.",
      color: "from-blue-500 to-green-500",
      bgGradient: "from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-900/30",
      decorativeEmoji: "📱",
      gamingIcon: Gamepad2
    },
    {
      icon: Globe,
      title: "Learn Globally",
      description: "Join learners worldwide! Our educational content adapts to different skill levels and learning styles for everyone.",
      color: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-900/30",
      decorativeEmoji: "🌍",
      gamingIcon: Trophy
    }
  ];

  const stats = [
    { number: "150+", label: "Free Games", icon: Gamepad2, color: "text-blue-600" },
    { number: "0", label: "Registration Required", icon: Shield, color: "text-green-600" },
    { number: "5", label: "Learning Categories", icon: Target, color: "text-yellow-600" },
    { number: "24/7", label: "Always Available", icon: Star, color: "text-green-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" data-testid="why-choose-section">
      {/* Gaming decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-20 left-10 text-blue-200/10 text-6xl motion-safe:animate-bounce motion-safe:delay-1000">🎮</div>
        <div className="absolute bottom-20 right-16 text-green-200/10 text-5xl motion-safe:animate-pulse motion-safe:delay-500">🏆</div>
        <div className="absolute top-40 right-20 text-yellow-200/10 text-4xl motion-safe:animate-bounce motion-safe:delay-700">⭐</div>
        <div className="absolute bottom-40 left-20 text-purple-200/10 text-3xl motion-safe:animate-pulse motion-safe:delay-300">🎯</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/50">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" data-testid="text-why-choose-title">
                Why Choose DapsiGames?
              </h2>
              <Gamepad2 className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed" data-testid="text-why-choose-subtitle">
            We've created the most engaging collection of study games to help you <span className="text-green-600 font-semibold">learn smarter, not harder</span>. 
            From interactive math challenges to virtual science labs, we've got you covered with games that make learning fun and effective!
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Key Message */}
          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  Study Games, Zero Cost
                </h3>
              </div>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                Access high-quality educational games designed by learning experts and game developers. Our platform offers engaging
                learning experiences that rival expensive educational software, but <span className="text-blue-600 font-semibold">completely free</span> and 
                accessible through your web browser.
              </p>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Whether you're a student mastering concepts, a teacher seeking classroom activities, or a parent supporting learning at home -
                our study games deliver effective education without the expensive price tag.
              </p>

              {/* Gaming CTA */}
              <div className="mt-8 flex gap-4">
                <Link 
                  href="/games"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                  data-testid="button-start-playing"
                  aria-label="Start playing educational games now"
                >
                  <Play className="w-4 h-4" />
                  Start Playing Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                      <IconComponent className={`${stat.color} w-6 h-6`} />
                    </div>
                    <div className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2" data-testid={`stat-number-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.number}</div>
                    <div className="text-neutral-600 dark:text-neutral-400 font-medium" data-testid={`stat-label-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const GamingIconComponent = benefit.gamingIcon;
            
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${benefit.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border-2 border-gray-200/50 hover:border-gray-300/50 cursor-pointer relative overflow-hidden group`}
                data-testid={`benefit-card-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Gaming decorative elements */}
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                  <GamingIconComponent className="w-6 h-6 text-gray-600" />
                </div>
                <div className="absolute bottom-3 left-3 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {benefit.decorativeEmoji}
                </div>
                
                {/* Main Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative mx-auto`}>
                  <IconComponent className="text-white" size={28} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-800 fill-current" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4" data-testid={`text-benefit-title-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {benefit.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed" data-testid={`text-benefit-description-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;