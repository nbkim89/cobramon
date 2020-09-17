import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
// Company Routes
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QRCodes from "./pages/QRCodes/";
import Chat from "./pages/Chat/";
// Customer Routes
import Welcome from "./pages/Welcome/";
import CustomerChat from "./pages/CustomerChat";
import ThankYou from "./pages/ThankYou";
// import CustomerReview from "./pages/CustomerReview";
// import Profile from "./pages/Profile";
// import Home from "./pages/Home";
// import Tables from "./pages/Tables";
// import Reviews from "./pages/Reviews";
// import Chat from "./components/Chat/Chat";
// import Join from "./components/Join/Join";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* Company Routes*/}
            <ProtectedRoute exact path="/">
              <QRCodes />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/chat" exact component={Chat} />
            <ProtectedRoute exact path="/qrcodes">
              <QRCodes />
            </ProtectedRoute>
            {/* Customer Routes*/}
            <Route path="/welcome/:company_id/:table_num/:company_name">
              <Welcome />
            </Route>
            <Route path="/customerchat" exact component={CustomerChat} />
            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
            <Route path="/*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
