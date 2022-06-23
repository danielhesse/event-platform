import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qvedvd06vg01yx09hsesfd/master",
  cache: new InMemoryCache(),
});
