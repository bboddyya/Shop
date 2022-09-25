import { IProductsState, ProductsAction, ProductsActionTypes } from "../types/products"


const initialState:IProductsState = {
    products:[],
    isLoading:false,
    error:null
}



export const productsReducer = (state= initialState, action:ProductsAction):IProductsState => {
    switch (action.type){
       case ProductsActionTypes.FETCH_PRODUCTS: {
        return {
            ...state,
            products:[],
            isLoading:true,
            error:null
        }
       }

       case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS: {
        return {
            ...state,
            products:action.payload,
            isLoading:false,
            error:null
        }
       }

       case ProductsActionTypes.FETCH_PRODUCTS_ERROR: {
        return {
            ...state,
            products:[],
            isLoading:false,
            error:action.payload
        }
       }

        default: return state
    }
    
}