import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import RoutesAdm from "./routes/routesAdm";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <RoutesAdm />
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
