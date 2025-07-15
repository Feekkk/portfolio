import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ChevronRight, Code2, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-advance through animation steps
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleContinue = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 opacity-0">
      </div>
    );
  }

  return (
    <div className="welcome-screen fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-stone-400 to-stone-300 rounded-full welcome-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-20">
        {/* Logo/Brand Animation */}
        <div className={`mb-12 transition-all duration-1000 ${
          currentStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-stone-600 to-stone-400 rounded-full blur-3xl opacity-40 animate-pulse welcome-glow"></div>
            <div className="relative bg-gradient-to-r from-stone-200 to-white p-8 rounded-3xl border border-stone-700 shadow-2xl">
              <Code2 className="w-20 h-20 text-stone-800 mx-auto mb-4 animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent welcome-text-glow">
                WNAFIQ.XYZ
              </h1>
            </div>
          </div>
        </div>

        {/* Welcome message */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${
          currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 welcome-text-glow">
            Welcome to My Portfolio
          </h2>
          <p className="text-2xl text-stone-300 leading-relaxed welcome-fade-in">
            Full-Stack Developer & Tech Enthusiast
          </p>
        </div>

        {/* Animated tagline */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${
          currentStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center space-x-3 text-stone-400 mb-8">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="text-xl font-medium">Crafting Digital Experiences</span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <p className="text-stone-400 max-w-lg mx-auto text-lg leading-relaxed">
            Ready to explore my journey through code, creativity, and cutting-edge technology?
          </p>
        </div>

        {/* Continue button */}
        <div className={`transition-all duration-1000 delay-1500 ${
          currentStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button
            onClick={handleContinue}
            size="lg"
            className="bg-gradient-to-r from-stone-700 to-stone-600 hover:from-stone-800 hover:to-stone-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-stone-500/25 transform hover:scale-105 transition-all duration-300 group welcome-glow"
          >
            Enter Portfolio
            <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-8 text-stone-500 text-base animate-pulse">
            Click to continue to the main site
          </div>
        </div>

        {/* Enhanced Loading dots - positioned relative to content */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-3">
            {[0, 1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentStep >= step 
                    ? 'bg-stone-400 welcome-pulse-dot' 
                    : 'bg-stone-700'
                }`}
                style={{
                  animationDelay: `${step * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900/90 to-black opacity-95 -z-10"></div>
    </div>
  );
};

export default WelcomeScreen;
