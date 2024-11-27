import {createSlice} from "@reduxjs/toolkit";

const productCart = createSlice({
    name: "productCart",
    initialState: {
        product: {},
    },
    reducers: {
        setProduct: (state, action) => {
            return {...state, product: action.payload};
        }
    }
})

export const {setProduct} = productCart.actions;
export default productCart.reducer;
