import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducers/shopReducer";
import ProductCartReducer from "../reducers/ProductCartReducer";
import ShoppingCartReducer from "../reducers/ShoppingCartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        productCart: ProductCartReducer,
        shoppingCart: ShoppingCartReducer,
    }
})

export default store;
