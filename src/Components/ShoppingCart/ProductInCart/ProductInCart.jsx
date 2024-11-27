import s from "./ProductInCart.module.scss";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  setCountProductInCart,
} from "../../../data/reducers/ShoppingCartReducer";

const ProductInCart = ({ productInCart }) => {
  let dispatch = useDispatch();
  const RemoveHandler = () => {
    dispatch(removeProductFromCart(productInCart.id));
  };

  const SetCountHandler = (e) => {
    let params = {
      sign: e.target.innerHTML,
      id: productInCart.id,
    };
    dispatch(setCountProductInCart(params));
  };

  return (
    <div className={s.ProductInCart}>
      <img src={productInCart.image} alt="" />
      <div>
        <h2>{productInCart.title}</h2>
        <h2>Count: {productInCart.count}</h2>
        <button onClick={(e) => SetCountHandler(e)}>+</button>
        <button onClick={(e) => SetCountHandler(e)}>-</button>
      </div>
      <button onClick={RemoveHandler}>drop/remove</button>
    </div>
  );
};

export default ProductInCart;
