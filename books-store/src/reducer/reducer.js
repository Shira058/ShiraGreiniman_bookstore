const initialState = {
    products: [
      ],

    order: {
        firstName: "",
        lastName: "",
        address: "",
        phone_number:"",
        amount: 0,
        books: []
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, products: [...state.products, action.products ]};
        case "MAKE_ORDER":
            return { ...state, order: action.order };
        default:
            return state;
    }
}

export default userReducer;