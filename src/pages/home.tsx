
import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  BookOpen, 
  Brain, 
  Calculator, 
  Gamepad2, 
  Globe, 
  GraduationCap, 
  Lightbulb, 
  MemoryStick, 
  Play, 
  Star, 
  Target, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const categories = [
    {
      name: 'Math Games',
      icon: Calculator,
      description: 'Practice arithmetic, algebra, and problem-solving',
      count: '45+ games',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Language Games',
      icon: BookOpen,
      description: 'Vocabulary, spelling, and reading comprehension',
      count: '38+ games',
      color: 'bg-green-100 text-green-700'
    },
    {
      name: 'Memory Games',
      icon: Brain,
      description: 'Boost memory and cognitive skills',
      count: '25+ games',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Logic Games',
      icon: Lightbulb,
      description: 'Critical thinking and reasoning challenges',
      count: '32+ games',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      name: 'Science Games',
      icon: Target,
      description: 'Explore physics, chemistry, and biology',
      count: '28+ games',
      color: 'bg-teal-100 text-teal-700'
    }
  ];

  const popularGames = [
    {
      name: 'Quick Math Challenge',
      description: 'Fast-paced arithmetic practice for all skill levels',
      icon: Calculator,
      plays: '2.1M',
      difficulty: 'Easy'
    },
    {
      name: 'Word Memory Master',
      description: 'Improve vocabulary while training your memory',
      icon: Brain,
      plays: '1.8M',
      difficulty: 'Medium'
    },
    {
      name: 'Logic Puzzle Pro',
      description: 'Challenging puzzles to boost critical thinking',
      icon: Lightbulb,
      plays: '1.5M',
      difficulty: 'Hard'
    },
    {
      name: 'Science Explorer',
      description: 'Interactive experiments and discovery games',
      icon: Target,
      plays: '980K',
      difficulty: 'Medium'
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'Learn Faster',
      description: 'Gamified learning accelerates retention and understanding'
    },
    {
      icon: Brain,
      title: 'Train Memory',
      description: 'Scientifically designed games to boost cognitive abilities'
    },
    {
      icon: Zap,
      title: 'Stay Motivated',
      description: 'Progress tracking and achievements keep you engaged'
    },
    {
      icon: Globe,
      title: 'Free & Accessible',
      description: 'Available anywhere, anytime - completely free to play'
    }
  ];

  const stats = [
    { number: '25M+', label: 'Game Plays' },
    { number: '180+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' },
    { number: '100%', label: 'Free to Play' }
  ];

  const faqs = [
    {
      question: 'Are these games completely free?',
      answer: 'Yes! All our study games are 100% free to play. No hidden fees, no subscriptions required.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed to start playing. However, creating a free account allows you to save progress and track achievements.'
    },
    {
      question: 'Which subjects are covered?',
      answer: 'We cover Math, Language Arts, Science, Memory training, Logic puzzles, and more. New games are added regularly.'
    },
    {
      question: 'Are the games suitable for all ages?',
      answer: 'Our games are designed for students of all ages, from elementary to college level, with adjustable difficulty settings.'
    },
    {
      question: 'Can I play on mobile devices?',
      answer: 'Absolutely! All games are responsive and work perfectly on smartphones, tablets, and desktop computers.'
    },
    {
      question: 'How often are new games added?',
      answer: 'We add new games every month and regularly update existing ones based on user feedback and educational trends.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Learn Through Play – 150+ Free Study Games
            </h1>
            <p className="mb-8 text-xl opacity-90 md:text-2xl">
              Boost memory, problem-solving, and learning with fun and interactive study games designed for students of all ages.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <Link href="/all-games">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Play className="mr-2 h-5 w-5" />
                  Start Playing Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Browse Categories
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Users className="mr-1 h-4 w-4" />
                500K+ Learners
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Gamepad2 className="mr-1 h-4 w-4" />
                5M+ Game Plays
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Star className="mr-1 h-4 w-4" />
                4.8/5 Rating
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              What is Study Games Hub?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We're on a mission to make learning fun and effective through engaging study games. 
              Our platform offers free, interactive educational games that help students of all ages 
              improve their skills while having fun.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full ${category.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                    <Badge variant="outline" className="mt-2">{category.count}</Badge>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Popular Study Games
            </h2>
            <p className="text-lg text-gray-600">
              Try our most loved games that have helped millions of students learn better
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularGames.map((game, index) => {
              const IconComponent = game.icon;
              return (
                <Card key={index} className="group transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="outline">{game.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-lg">{game.name}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{game.plays} plays</span>
                      <Button size="sm">
                        Play Now
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Study Games Hub?
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">Get started in three simple steps</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Choose Your Game</h3>
              <p className="text-gray-600">Browse our categories and pick a game that matches your learning goals</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Start Playing</h3>
              <p className="text-gray-600">Jump right in - no downloads or sign-ups required</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Learn & Improve</h3>
              <p className="text-gray-600">Track your progress and watch your skills grow with each game</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Trusted by Learners Worldwide
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Join millions of students who are already improving their skills with our games
          </p>
          <Link href="/all-games">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Play className="mr-2 h-5 w-5" />
              Start Playing Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
