const MAKE_ORDER = 'MAKE_ORDER';

export default function  orderAction (response) {
    let order = {
        firstName: response.firstName,
        lastName: response.lastName,
        address: response.address,
        phone_number: response.phone_number,
        amount: response.amount,
        books: response.books
    }
    return {
        type: MAKE_ORDER,
        order
    }
}

