export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';

// For add item to cart
export const addCart = (product) => {
    return{
        type: ADD_ITEM,
        payload: product,
    }
}

// For delete item from cart
export const delCart = (product) => {
    return{
        type: DEL_ITEM,
        payload: product,
    }
}