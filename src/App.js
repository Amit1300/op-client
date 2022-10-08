import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "./sass/main.scss";

function App() {
  // app name
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PROXY}/api/app/title`)
      .then((response) => {
        document.title = response.data.title;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
