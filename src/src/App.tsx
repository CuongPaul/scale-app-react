import { useRef, useState, useEffect, useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Home } from "./pages";
import { AppContext } from "./contexts";
import { AccountReducer, initialAccountState } from "./contexts/account";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  const [accountState, accountDispatch] = useReducer(
    AccountReducer,
    initialAccountState
  );

  const [isGlobalLoading, setIsGlobalLoading] = useState(false);

  useEffect(() => {
    if (appRef.current) {
      const widthbyDesign = 1920;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthbyDesign) / 10;

      appRef.current.style.setProperty("--proportion", `${proportion}`);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        accountState,
        accountDispatch,

        isGlobalLoading,
        setIsGlobalLoading,
      }}
    >
      <div ref={appRef} className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;
