import React from "react";
import { Route } from "react-router-dom";
import Category from "./Category/Category";
import { Query } from "./Query/Query";

let state = {
  data: {
    category: {
      name: "tech",
      products: [
        {
          id: "ps-5",
          name: "PlayStation 5",
          gallery: [
            "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
          ],
          prices: [
            {
              amount: 844.02,
              currency: "USD",
            },
            {
              amount: 606.67,
              currency: "GBP",
            },
            {
              amount: 1088.79,
              currency: "AUD",
            },
            {
              amount: 91147.25,
              currency: "JPY",
            },
            {
              amount: 63826.91,
              currency: "RUB",
            },
          ],
        },
        {
          id: "xbox-series-s",
          name: "Xbox Series S 512GB",
          gallery: [
            "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
          ],
          prices: [
            {
              amount: 333.99,
              currency: "USD",
            },
            {
              amount: 240.07,
              currency: "GBP",
            },
            {
              amount: 430.85,
              currency: "AUD",
            },
            {
              amount: 36068.27,
              currency: "JPY",
            },
            {
              amount: 25257.22,
              currency: "RUB",
            },
          ],
        },
        {
          id: "apple-imac-2021",
          name: "iMac 2021",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
          ],
          prices: [
            {
              amount: 1688.03,
              currency: "USD",
            },
            {
              amount: 1213.34,
              currency: "GBP",
            },
            {
              amount: 2177.57,
              currency: "AUD",
            },
            {
              amount: 182294.51,
              currency: "JPY",
            },
            {
              amount: 127653.82,
              currency: "RUB",
            },
          ],
        },
        {
          id: "apple-iphone-12-pro",
          name: "iPhone 12 Pro",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
          ],
          prices: [
            {
              amount: 1000.76,
              currency: "USD",
            },
            {
              amount: 719.34,
              currency: "GBP",
            },
            {
              amount: 1290.99,
              currency: "AUD",
            },
            {
              amount: 108074.6,
              currency: "JPY",
            },
            {
              amount: 75680.48,
              currency: "RUB",
            },
          ],
        },
        {
          id: "apple-airpods-pro",
          name: "AirPods Pro",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
          ],
          prices: [
            {
              amount: 300.23,
              currency: "USD",
            },
            {
              amount: 215.8,
              currency: "GBP",
            },
            {
              amount: 387.3,
              currency: "AUD",
            },
            {
              amount: 32422.38,
              currency: "JPY",
            },
            {
              amount: 22704.14,
              currency: "RUB",
            },
          ],
        },
        {
          id: "apple-airtag",
          name: "AirTag",
          gallery: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
          ],
          prices: [
            {
              amount: 120.57,
              currency: "USD",
            },
            {
              amount: 86.67,
              currency: "GBP",
            },
            {
              amount: 155.54,
              currency: "AUD",
            },
            {
              amount: 13021.04,
              currency: "JPY",
            },
            {
              amount: 9118.13,
              currency: "RUB",
            },
          ],
        },
      ],
    },
  },
};

class Wraper extends React.Component {
  checkCategory = () => {
    console.log(this.props.match);
  };
  render() {
    this.checkCategory();
    return (
      <div>
        <Route
          path="/Category/Clothes"
          render={() => {
            return (
              <Query value={"clothes"} />
              /*  <Category
                products={state.data.category.products}
                category={state.data.category.name}
                id={state.data.category.products.id}
              /> */
            );
          }}
        />

        <Route
          path="/Category/Tech"
          render={() => {
            return (
              <Category
                products={state.data.category.products}
                category={state.data.category.name}
                id={state.data.category.products.id}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default Wraper;
