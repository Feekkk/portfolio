import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-context";
import Home from "./Pages/Home";
import Project from "./Pages/Project";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;