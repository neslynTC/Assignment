import { createReducer, on } from '@ngrx/store';
import { initialState, Products } from './product.state';
import { ActionGetProducts, ActionSetProducts, ActionTypes } from './product.action';

export function ProductsReducer(state: Products = initialState, action) {
    switch(action.type){
        case(ActionTypes.ACTION_GET_PRODUCTS):
            return state
        case(ActionTypes.ACTION_SET_PRODUCTS):
            return [...action.payload]
        default:
            return state
    }
}