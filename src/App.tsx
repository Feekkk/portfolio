import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-context";
import Home from "./Pages/Home";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Always show welcome screen on page load/refresh
    setShowWelcome(true);
    setShowHome(false);
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Slight delay to ensure smooth transition
    setTimeout(() => {
      setShowHome(true);
    }, 200);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      {showHome && (
        <div className="animate-fade-in">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
