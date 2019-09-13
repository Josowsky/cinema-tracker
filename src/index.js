import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/styles.scss";

import { persistor, store } from "./store";
import { Header } from "./components/ui/Header/Header";
import { FooterMenu } from "./components/ui/FooterMenu/FooterMenu";
import { MoviesList } from "./components/pages/MoviesList/MoviesList";
import { MovieDetails } from "./components/pages/MovieDetails/MovieDetails";

import { ViewportContextProvider } from "./components/context/ViewportContext/ViewportContext";

ReactDOM.render(
  <div className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ViewportContextProvider>
            <Header />
            <div className="app_container">
              <Route exact path="/" component={MoviesList} />
              <Route path="/film/:id" component={MovieDetails} />
            </div>
            <FooterMenu />
          </ViewportContextProvider>
        </Router>
      </PersistGate>
    </Provider>
  </div>,
  document.getElementById("root")
);
