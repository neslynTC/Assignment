import { Product } from "../shared/product.model"

export interface Products {
    products: Product[]
}
export const initialState: Products = {
    products: []
}