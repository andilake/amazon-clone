export const initialState = {
    basket: [],
    subtotal:0,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                subtotal: state.subtotal + action.item.price,
            };
    
        default:
            return state;
    }
};

export default reducer;