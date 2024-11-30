import { useState, useReducer } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { AppContext } from "./contexts";
import { PrivateRoute } from "./components";
import { Home, Landing, NotFound } from "./pages";
import { AccountReducer, initialAccountState } from "./contexts/account";

const App = () => {
  const token = localStorage.getItem("accessToken");

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
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route
            path="/"
            element={token ? <Navigate to="/home" /> : <Landing />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
