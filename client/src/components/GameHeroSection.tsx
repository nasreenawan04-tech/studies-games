
interface GameHeroSectionProps {
  title: string;
  description: string;
  testId?: string;
}

const GameHeroSection = ({ title, description, testId }: GameHeroSectionProps) => {
  return (
    <section className="bg-background dark:from-slate-900 dark:to-slate-800 py-20 sm:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" 
            data-testid={testId || "text-page-title"}
          >
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameHeroSection;
