import { ADD_ITEM, DEL_ITEM } from "../action";

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type){
        case ADD_ITEM:
            // Check if the product is already exist
            const exist = state.find((item) => item.id === product.id)
            if(exist){
                // Increase the quantity
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty + 1} : item
                );
            } 
            else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        case DEL_ITEM:
            const itemExist = state.find((item) => item.id === product.id);
            if(itemExist.qty === 1){
                return state.filter((item) => item.id !== itemExist.id);
            }
            else{
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty-1} : item
                );
            }
        default:
            return state;
    }
}

export default handleCart;