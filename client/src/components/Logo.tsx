import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg ${className || 'w-8 h-8'}`}>
      <GraduationCap className="w-5 h-5 text-white" />
    </div>
  );
};

export default Logo;