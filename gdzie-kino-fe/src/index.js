import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/styles.scss";

import { persistor, store } from "./store";
import { AnonymousRoute } from "./components/custom.routes";
import { FilmList } from "./components/film.list";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Modals } from "./components/modals";
import { FilmDetails } from "./components/film.details";
import { MovieTheaters } from "./components/movie.theaters";
import { UserPage } from "./components/user.page";
import { FavoritesList } from "./components/favorites.list";
import { LoginPage } from "./components/login.page";
import { RegisterPage } from "./components/register.page";
import { ErrNotFound } from "./components/err.not.found";
import { ScrollToTop } from "./components/scroll.to.top";

ReactDOM.render(
  <div className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop>
            <Header />
            <Route exact path="/" component={FilmList} />
            <Route path="/film/:id" component={FilmDetails} />
            <Route exact path="/konto" component={UserPage} />
            <Route exact path="/kina" component={MovieTheaters} />
            <Route exact path="/ulubione" component={FavoritesList} />
            <AnonymousRoute exact path="/logowanie" component={LoginPage} />
            <AnonymousRoute
              exact
              path="/rejestracja"
              component={RegisterPage}
            />
            <AnonymousRoute exact path="/404" component={ErrNotFound} />
            <Footer />
            <Modals />
          </ScrollToTop>
        </Router>
      </PersistGate>
    </Provider>
  </div>,
  document.getElementById("root")
);
