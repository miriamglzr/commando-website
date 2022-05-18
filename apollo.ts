import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl345fns355od01xqgs8ugfv9/master",
  cache: new InMemoryCache()
});
