import React, { useState } from "react";
import "./global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import FoodComponent from "./components/Food";
import SignInSignUpPage from "./components/SignInSignUpPage/SignInSignUpPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {" "}
      {/* Apply the "App" class here */}
      {/* If the user is not logged in, show the SignInSignUpPage */}
      {!isLoggedIn && <SignInSignUpPage onLoginSuccess={handleLoginSuccess} />}
      {/* If the user is logged in, show the main components */}
      {isLoggedIn && (
        <>
          <Header />
          <Hero />
          <About />
          <FoodComponent />
          <Subscription />
          <Footer />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
