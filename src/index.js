import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { GET_PRODUCTS_OF_CATEGORY, Query } from "./Query/Query";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

/* const GET_ALL_PRODUCTS = gql`
  query getAllProductsByCategories {
    category {
      name
      products {
        name
        prices {
          currency
          amount
        }
      }
    }
  }
`;
export let Once = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.category.products.map((item) => {
        return (
          <span>
            {item.name} + "--Prices"+ {item.prices[0].amount}
          </span>
        );
      })}
    </div>
  );
}; */

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
      <Query />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
