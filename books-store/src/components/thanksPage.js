import store from "../store"
import styled from "styled-components";

const Form = styled.span`
display: flex;
align-items: center;
flex-direction: column;
`;
const Div = styled.div`
border: 3px solid palevioletred;
text-align: center;
`;
export default function ThanksPage() {
    const fullName = `${store.getState().order["firstName"]} ${store.getState().order.lastName}`
    console.log(store.getState())
    return (
        <Form>
            <Div>
                <h2>Congrate, {fullName}</h2>
                <p>Your order: {sessionStorage.getItem("orderId")}</p>
                <p>{store.getState().order.books[0].storeName} wiil hope to see tou again</p>
            </Div>
        </Form>
    )
}