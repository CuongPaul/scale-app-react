import { useRef, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (appRef.current) {
        const originalWidth = 1920;
        const { innerWidth } = window;

        const proportion = Math.floor((innerWidth * 10) / originalWidth) / 10;

        appRef.current.style.setProperty("--proportion", `${proportion}`);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={appRef} className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
