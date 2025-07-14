import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-context";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
