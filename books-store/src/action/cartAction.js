const ADD_TO_CART = 'ADD_TO_CART';

export default function  cartAction (response) {
    let products = {
        id: response.id,
        name: response.name,
        description: response.description,
        price: response.price,
        storeName:response.storeName,
        quantity: response.quantity
    }

    return {
        type: ADD_TO_CART,
        products
    }
}

