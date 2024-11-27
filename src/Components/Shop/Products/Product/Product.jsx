import s from './Product.module.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../../../data/reducers/ShoppingCartReducer";

const Product = ({ product }) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const ShowMoreHandler = () => {
        navigate(`/products/${product.id}`);
    }

    const AddToCartHandler = () => {
        dispatch(addProductToCart(product));
    }

    return (
        <div className={s.Product}>
            <div>
                <img src={product.image} alt=""/>
            </div>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <button onClick={AddToCartHandler}>Add to Cart</button>
            <button onClick={ShowMoreHandler}>Show more info</button>
        </div>
    )
}

export default Product;
