import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components';
import store from '../store';
import cartAction from '../action/cartAction';

const Button = styled.button`
width: 20rem;
background-color: white;
border: solid palevioletred;
border-radius: 2px
`;

export default function Book(props) {
  const navigate = useNavigate();
  const showProductDetails = () => {
    const bookId = props.id;
    navigate(`/bookDetails/${bookId}`)
  };
  const addToCart = () => {
    const product = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      storeName: props.storeName,
      quantity: 1
    };
    store.dispatch(cartAction(product));
    navigate('/cart');
  }
  return (
    <div key={props.id}>
      <Button onClick={showProductDetails}>
        <h3>{props.name}</h3>
        <br />
        <b>{props.author}</b>
        <b>{props.type}</b>
        <br />
        <p>{props.price} $</p>
        < FaCartPlus onClick={addToCart} />
      </Button>
    </div>
  );
}