import { db } from "../data/db";
import { CartItem, Product } from "../types";

// Actions
export type CartActions =
    { type: 'add-to-cart', payload: { item: Product } } |
    { type: 'remove-from-cart', payload: { id: Product['id'] } } |
    { type: 'increase-quantity', payload: { id: Product['id'] } } |
    { type: 'decrease-quantity', payload: { id: Product['id'] } } |
    { type: 'clear-cart' }

// State
export type CartState = {
    data: Product[]
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'add-to-cart'){
        return {
            ...state
        }
    }

    if (action.type === 'remove-from-cart'){

        return {
            ...state
        }
    }

    if (action.type === 'increase-quantity'){
        return {
            ...state
        }
    }

    if (action.type === 'decrease-quantity'){
        return {
            ...state
        }
    }

    if (action.type === 'clear-cart'){
        return {
            ...state
        }
    }
}