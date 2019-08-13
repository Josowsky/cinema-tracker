import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/styles.scss";

import { persistor, store } from "./store";
import { AnonymousRoute } from "./components/custom.routes";
import { MoviesList } from "./components/pages/MoviesList/MoviesList";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Modals } from "./components/modals";
import { FilmDetails } from "./components/film.details";
import { MovieTheaters } from "./components/movie.theaters";
import { ErrNotFound } from "./components/err.not.found";
import { ScrollToTop } from "./components/scroll.to.top";

import { ViewportContextProvider } from "./components/context/ViewportContext/ViewportContext";

ReactDOM.render(
  <div className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ViewportContextProvider>
            <ScrollToTop>
              <Header />
              <Route exact path="/" component={MoviesList} />
              <Route path="/film/:id" component={FilmDetails} />
              <Route exact path="/kina" component={MovieTheaters} />
              <AnonymousRoute exact path="/404" component={ErrNotFound} />
              <Footer />
              <Modals />
            </ScrollToTop>
          </ViewportContextProvider>
        </Router>
      </PersistGate>
    </Provider>
  </div>,
  document.getElementById("root")
);
