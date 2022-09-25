export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export type ProductsAction =  IFetchProcutsAction | IFetchProcutsActionSuccess | IFetchProcutsActionError

interface IFetchProcutsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS
}

interface IFetchProcutsActionSuccess {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS
    payload: ISingleProduct[]
}

interface IFetchProcutsActionError {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR
    payload: string
}

interface ISingleProduct {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string 
}

export interface IProductsState {
    products: ISingleProduct[] 
    isLoading: boolean
    error:  null | string

}