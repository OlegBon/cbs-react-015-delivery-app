import s from './ProductCart.module.scss';
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setProduct} from "../../../../data/reducers/ProductCartReducer";

const ProductCart = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => state.productCart.product);
    let {productId} = useParams();

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                dispatch(setProduct(response.data))
            })
    }, [productId])


    return (
        <div className={s.ProductCart}>
            <img src={product.image} alt=""/>
            <div className={s.description}>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}$</h3>
                <p>{product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCart;
