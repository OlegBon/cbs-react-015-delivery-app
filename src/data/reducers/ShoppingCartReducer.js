import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        productsInCart: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            // let {id} = action.payload;
            // if (!state.productsInCart.some(pr => pr.id === id)) {
            //     let newProductInCart = {...action.payload, count: 1};
            //     return {...state, productsInCart: [...state.productsInCart, newProductInCart]}
            // }
            // else {
            //    let newProductsInCart = state.productsInCart.map(item => {
            //        if (item.id === id) {
            //            return {...item, count: item.count + 1};
            //        }
            //    });
            //    return {...state, productsInCart: newProductsInCart}
            // }

            if (!state.productsInCart.some(pr => pr.id === action.payload.id)) {
                let productInCart = {
                    ...action.payload,
                    count: 1,
                }
                state.productsInCart.push(productInCart);
            } else {
                state.productsInCart.forEach((el) => {
                    if (el.id === action.payload.id) {
                        el.count += 1;
                    }
                })
            }
        },
        removeProductFromCart: (state, action) => {
            return {
                ...state,
                productsInCart: [...state.productsInCart.filter((pr) => pr.id !== action.payload)]
            }
        },
        setCountProductInCart: (state, action) => {
            state.productsInCart.forEach(el => {
                if (el.id === action.payload.id) {
                    if (action.payload.sign === '+') el.count += 1;
                    if (action.payload.sign === '-' && el.count > 1) el.count -= 1;
                }
            })
        }
    }
})

export const { addProductToCart, removeProductFromCart, setCountProductInCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
