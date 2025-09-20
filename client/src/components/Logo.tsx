import { GraduationCap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <GraduationCap className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-900">
        Study Games Hub
      </span>
    </div>
  );
};

export default Logo;