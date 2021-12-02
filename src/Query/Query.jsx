import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { getVariableValues } from "graphql/execution/values";

const quer = gql`
  type Query {
    categories: [Category]
    category(input: CategoryInput): Category
    product(id: String!): Product
    currencies: [String]
  }
`;
const GET_PRODUCTS_OF_CATEGORY = gql`
  query Category {
    category(input: { title: "clothes" }) {
      name
      products {
        name
        id
        inStock
        gallery
        prices {
          amount
          currency
        }
      }
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
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

export let Query = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_OF_CATEGORY);

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
};
