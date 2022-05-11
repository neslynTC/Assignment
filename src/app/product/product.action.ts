import { Action } from "@ngrx/store";
import { Product } from "../shared/product.model";

export enum ActionTypes {
    ACTION_GET_PRODUCTS = "ACTION_GET_PRODUCTS",
    ACTION_SET_PRODUCTS = "ACTION_SET_PRODUCTS",
}

export class ActionGetProducts implements Action {
    readonly type: string = ActionTypes.ACTION_GET_PRODUCTS;
}

export class ActionSetProducts implements Action {
    readonly type: string = ActionTypes.ACTION_SET_PRODUCTS;
    constructor(public payload: Product[]){}
}