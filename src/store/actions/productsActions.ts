import { ProductsAction, ProductsActionTypes } from "../types/products"
import {Dispatch} from 'react'

export const fetchProducts = () => {
    return async (dispatch:Dispatch<ProductsAction>) => {
        try {
            dispatch({type:ProductsActionTypes.FETCH_PRODUCTS})
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
            const result = await response.json()
            dispatch({type:ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload:result})
        } catch (error) {
            dispatch({type:ProductsActionTypes.FETCH_PRODUCTS_ERROR,payload:'Произошла ошибка'})
        }
    }
}