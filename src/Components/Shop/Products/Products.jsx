import s from './Products.module.scss';
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../data/reducers/shopReducer";
import Product from "./Product/Product";

const Products = () => {
    let dispatch = useDispatch();
    let products = useSelector(state => state.shop.products);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then((response) => {
                dispatch(setProducts(response.data));
            })
    }, []);

    return(
        <div className={s.Products}>
            {
                products.map((product) => <Product product={product}/>)
            }
        </div>
    )
}

export default Products;


