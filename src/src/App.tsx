import { useState, useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AppContext } from "./contexts";
import { Home, NotFound } from "./pages";
import { AccountReducer, initialAccountState } from "./contexts/account";

const App = () => {
  const [accountState, accountDispatch] = useReducer(
    AccountReducer,
    initialAccountState
  );

  const [isGlobalLoading, setIsGlobalLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        accountState,
        accountDispatch,

        isGlobalLoading,
        setIsGlobalLoading,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
