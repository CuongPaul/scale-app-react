import { useRef, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appRef.current) {
      const widthbyDesign = 1920;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthbyDesign) / 10;

      appRef.current.style.setProperty("--proportion", `${proportion}`);
    }
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
