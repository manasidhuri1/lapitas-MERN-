import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Assets/theme";

import Home from "./components/Pages/Home";
import Information from "./components/Pages/Information";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Screens/Navbar";
import Profile from "./components/Pages/Profile";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Registration from "./components/Pages/Registration";
import RegisterLostItem from "./components/Pages/RegisterLostItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, createContext } from "react";
import { isAutheticated } from "./helper";
import LostAndFound from "./components/Pages/LostAndFound";
import SearchScreen from "./components/Pages/SearchScreen";
import Footer from "./components/Screens/Footer";
import DetailSearchScreen from "./components/Pages/DetailSearchScreen";
import AboutUs from "./components/Pages/AboutUs";
import Privacy from "./components/Pages/Privacy";
import Legal from "./components/Pages/Legal";
import Press from "./components/Pages/Press";

export const defaultContext = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
export const AppContext = createContext(defaultContext);

function App() {
  const [loggedIn, setLoggedIn] = useState(isAutheticated() ? true : false);
  const [userData, setUserData] = useState(
    isAutheticated() ? isAutheticated : {}
  );
  const login = () => {
    setUserData(isAutheticated());
    setLoggedIn(true);
  };
  const logout = () => {
    setUserData(isAutheticated());
    setLoggedIn(false);
  };
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: loggedIn,
        login: login,
        logout: logout,
        ...userData,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/information">
              <Information />
            </Route>
            <Route path="/register-lost-item">
              <RegisterLostItem />
            </Route>
            <Route path="/lost-and-found">
              <LostAndFound />
            </Route>
            <Route
              path="/edit-lost-item/:itemId"
              component={RegisterLostItem}
            ></Route>
            <Route path="/registrations">
              <Registration />
            </Route>
            <Route path="/search-list" exact component={SearchScreen}></Route>
            <Route
              exact
              path="/search-list/:itemId"
              component={DetailSearchScreen}
            ></Route>
            <Route path="/about-us" exact>
              <AboutUs />
            </Route>
            <Route path="/legal" exact>
              <Legal />
            </Route>
            <Route path="/press" exact>
              <Press />
            </Route>
            <Route path="/privacy" exact>
              <Privacy />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
