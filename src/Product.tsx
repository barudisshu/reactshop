import * as React from "react";
import { IProduct } from "./ProductsData";
import withLoader from "./withLoader";
import Tabs from "./Tabs";

interface IProps {
  product?: IProduct;
  inBasket: boolean;
  onAddToBasket: () => void;
}

const Product: React.SFC<IProps> = props => {
  const product = props.product;
  const handleAddClick = () => {
    props.onAddToBasket();
  };
  if (!product) {
    return null;
  }
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <Tabs headings={["Description", "Reviews"]} />
      <p>{product.description}</p>
      <div>
        <ul className="product-reviews">
          {product.reviews.map(review => (
            <li key={review.reviewer} className="product-reviews-item">
              <i>
                "{review.comment}" - {review.reviewer}
              </i>
            </li>
          ))}
        </ul>
      </div>
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency"
        }).format(product.price)}
      </p>
      {!props.inBasket && (
        <button onClick={handleAddClick}>Add to basket</button>
      )}
    </React.Fragment>
  );
};

export default withLoader(Product);
