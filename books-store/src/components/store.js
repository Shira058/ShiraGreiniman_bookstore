import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const Button = styled.button`
width: 20rem;
margin: 1rem;
background-color: white;
`;
export default function Store(props) {
    const navigate = useNavigate();
    const showStoreProducts = () => {
        const storeId = props.id;
        navigate(`/store/${storeId}`)
    };
    return (
        <div key={props.id}>
            <Button onClick={showStoreProducts}>
                <h3>{props.name}</h3>
                <b>{props.city}</b>
                <p>{props.address}</p>
                <br />
            </Button>
        </div>
    );
}