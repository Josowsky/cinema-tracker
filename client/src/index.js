import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { routes } from 'shared/constants/constants.routes';
import { apolloClient } from './apollo/client';

import { Header } from './components/ui/Header/Header';
import { FooterMenu } from './components/ui/FooterMenu/FooterMenu';

import { MoviesList } from './components/pages/MoviesList/MoviesList';
import { MovieDetails } from './components/pages/MovieDetails/MovieDetails';

import { ViewportContextProvider } from './components/context/ViewportContext/ViewportContext';

import { GlobalStyles, AppContainer } from './index.style';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <AppContainer>
      <GlobalStyles />
      <Router>
        <ViewportContextProvider>
          <Header />
          <div>
            <Route exact path={routes.home} component={MoviesList} />
            <Route path={routes.movie} component={MovieDetails} />
          </div>
          <FooterMenu />
        </ViewportContextProvider>
      </Router>
    </AppContainer>
  </ApolloProvider>,
  document.getElementById('root'),
);
