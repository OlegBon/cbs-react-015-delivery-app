import s from "./ShoppingCart.module.scss";
import { useSelector } from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";

const ShoppingCart = () => {
  let productsInCart = useSelector(
    (state) => state.shoppingCart.productsInCart
  );

  const calculateTotalPrice = () => {
    return productsInCart
      .reduce(
        (acc, productInCart) => acc + productInCart.price * productInCart.count,
        0
      )
      .toFixed(2);
  };

  return (
    <div className={s.ShoppingCartNew}>
      <div className={s.container}>
        <div className={s.inputs}>
          <h3>Name:</h3>
          <input type="text" placeholder="enter name" />
          <h3>Email:</h3>
          <input type="text" placeholder="enter e-mail" />
          <h3>Phone:</h3>
          <input type="text" placeholder="enter phone number" />
          <h3>Address:</h3>
          <input type="text" placeholder="enter address" />
        </div>
        <div className={s.products}>
          {productsInCart.map((product) => (
            <ProductInCart productInCart={product} />
          ))}
        </div>
        <div className={s.totalPrice}>
          <h2>Total Price: {calculateTotalPrice()}</h2>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
