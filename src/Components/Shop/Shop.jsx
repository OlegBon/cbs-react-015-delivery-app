import s from './Shop.module.scss';
import Products from "./Products/Products";
import {Route, Routes} from "react-router-dom";
import ProductCart from "./Products/ProductCart/ProductCart";

const Shop = () => {

    return (
        <div className={s.Shop}>
            <nav>
                <h3>Categories: </h3>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
            <div className={s.ShopProducts}>
                <Routes>
                    <Route path="/" element={<Products />}/>
                    <Route path="/products/:productId" element={<ProductCart />}/>
                </Routes>

            </div>
        </div>
    )
}

export default Shop;
