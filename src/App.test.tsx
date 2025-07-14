import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-context";

// Simple test component
const SimpleHome = () => {
  return (
    <div style={{padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh'}}>
      <h1 style={{color: 'black', fontSize: '24px'}}>Portfolio Test Page</h1>
      <p style={{color: 'black'}}>If you can see this, the app is working!</p>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<SimpleHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
