import logoImage from '@assets/logo.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logoImage}
      alt="DapsiGames Logo"
      className={`object-contain ${className || 'w-8 h-8'}`}
    />
  );
};

export default Logo;