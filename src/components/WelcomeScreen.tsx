import { useState, useEffect } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text animation after a brief delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 800);

    // Auto-navigate after 5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 200);
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`welcome-screen fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden transition-all duration-800 ${
      isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      {/* Thunder Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lightning bolts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute thunder-bolt"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Animated electric particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full electric-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Text */}
      <div className={`relative z-10 text-center transition-all duration-1200 ease-out ${
        showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      } ${isExiting ? 'opacity-0 translate-y-[-32px] scale-90' : ''}`}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white thunder-text select-none leading-none">
          PORTFOLIO
        </h1>
        
        {/* White glow effect */}
        <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white thunder-glow blur-sm opacity-30 leading-none pointer-events-none">
          PORTFOLIO
        </div>
      </div>

      {/* Black background */}
      <div className="absolute inset-0 bg-black -z-10"></div>
    </div>
  );
};

export default WelcomeScreen;
