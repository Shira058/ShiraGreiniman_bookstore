import store from "../store";
import cartAction from "../action/cartAction";
import { useNavigate } from "react-router-dom";

export default function PurchaseDetails(props) {
    let quantity;
    const navigate = useNavigate();
    const addToCart = () => {
        const product = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            storeName: props.storeName,
            quantity: quantity.value
        };
        store.dispatch(cartAction(product));
        navigate('/cart');
    };
    return (
        <div>
            <b>{props.price}$</b>
            <input placeholder='quantity' type="number" ref={node => { quantity = node; }} />
            <br />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}