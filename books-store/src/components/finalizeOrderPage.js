import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';
import store from '../store';
import { useNavigate } from 'react-router-dom';
import orderAction from '../action/orderAction';

const Form = styled.form`
display: flex;
align-items: center;
flex-direction: column;
`;
const Button = styled.button`
padding: 0.5rem 1rem;
border: solid palevioletred;
border-radius: 3px;
background-color: white;
`;
const Input = styled.input`
padding: 0.5rem 1rem;
border: solid palevioletred;
border-radius: 2px
`;

const ADD_ORDER = gql`
mutation Insert_orders_one($object: orders_insert_input!) {
    insert_orders_one(object: $object) {
      id
    }
  }
`;

export default function FinalizeOrderPage() {
    let address, firstName, lastName, phone_number;
    const [addOrder, { data, loading, error }] = useMutation(ADD_ORDER);
    const navigate = useNavigate();

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <Form
                onSubmit={async e => {
                    e.preventDefault();
                    await addOrder({
                        variables: {
                            object: {
                                "firstName": firstName.value,
                                "lastName": lastName.value,
                                "address": address.value,
                                "phone_number": phone_number.value,
                                "amount": 90,
                                "books": []
                            }
                        }
                    });
                    const order = {
                        "firstName": firstName.value,
                        "lastName": lastName.value,
                        "address": address.value,
                        "phone_number": phone_number.value,
                        "amount": 90,
                        "books": store.getState().products,
                    };
                    await store.dispatch(orderAction(order));
                    await sessionStorage.setItem("orderId", data.insert_orders_one.id);
                    await navigate('/thanks');
                }} >
                <h3>Fill your personal details</h3>
                <Input placeholder='first name' ref={node => { firstName = node; }} />
                <br />
                <Input placeholder='last name' ref={node => { lastName = node; }} />
                <br />
                <Input placeholder='address' ref={node => { address = node; }} />
                <br />
                <Input placeholder='phone number' ref={node => { phone_number = node; }} />
                <br />
                <Button type="submit">Buy</Button>
            </Form>
        </div>
    );
}
