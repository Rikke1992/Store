import { useQuery, gql } from "@apollo/client";
import CategoryContainer from "../Category/CategoryContainer";
import ProductComponent from "../Category/Product/ProductComponent";
import Preloader from "../Preloader/Preloader";

let ass = gql`
  query getCategor($input: CategoryInput) {
    category(input: { title: $input }) {
      name
      products {
        name
        gallery
        prices {
          currency
          amount
        }
      }
    }
  }
`;

const GET_PRODUCT_OF_ID = gql`
  query GetProductOfId($productId: String!) {
    product(id: $productId) {
      name
      gallery
      description
      category
      id
      attributes {
        id
        name
        type
        items {
          value
          id
          displayValue
        }
      }
      brand
      prices {
        amount
        currency
      }
      inStock
    }
  }
`;
const GetCategor = gql`
  query GetCategory($categoryInput: CategoryInput) {
    category(input: $categoryInput) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          amount
          currency
        }
        brand
      }
    }
  }
`;

/* const GetCategor = gql`
  query getCategor($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        name
        gallery
        prices {
          currency
          amount
        }
      }
    }
  }
`; */

export let Query = (props) => {
  const { loading, error, data } = useQuery(GetCategor, {
    variables: {
      categoryInput: { title: props.value },
    },
  });

  if (loading) return <Preloader />;
  if (error) return <p>Error :(</p>;
  debugger;
  return <CategoryContainer allProducts={data.category.products} data={data} />;
};

export let QueryGetProductOfId = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_OF_ID, {
    variables: {
      productId: props.value,
    },
  });

  if (loading) return <Preloader />;
  if (error) return <p>Error :(</p>;
  debugger;
  return <ProductComponent {...props} oneProduct={true} data={data} />;
};
