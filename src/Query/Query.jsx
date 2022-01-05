import { useQuery, gql } from "@apollo/client";
import CategoryContainer from "../Category/CategoryContainer";
import ProductComponent from "../Category/Product/ProductComponent";
import CurrencyComponent from "../Currency/CurrencyComponent";
import Preloader from "../Preloader/Preloader";
import style from "./../Currency/Currency.module.css";

let GetCurrencys = gql`
  query Currency {
    currencies
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

export let QueryCurrencys = (props) => {
  const { loading, error, data } = useQuery(GetCurrencys);

  if (loading)
    return (
      <div className={style.queryCurrencyLoading}>
        <span>Loading</span>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return <CurrencyComponent currencies={data.currencies} />;
};

export let Query = (props) => {
  const { loading, error, data } = useQuery(GetCategor, {
    variables: {
      categoryInput: { title: props.value },
    },
  });

  if (loading) return <Preloader />;
  if (error) return <p>Error :(</p>;
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
  return <ProductComponent {...props} oneProduct={true} data={data} />;
};
