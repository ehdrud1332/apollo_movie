import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
  cache: new InMemoryCache(),
});

export default client;
