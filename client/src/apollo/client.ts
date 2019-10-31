import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: '/graphql',
});

export { apolloClient };
