import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import RoutesAdm from "./routes/routesAdm";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <RoutesAdm />
      </AuthProvider>
    </Router>
  );
}

export default App;
