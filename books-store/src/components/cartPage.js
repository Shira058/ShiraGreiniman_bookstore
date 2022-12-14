import React, { useState, useEffect } from 'react';
import store from '../store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
const Table = styled.div`
    width: fit-content;
    align-items: center;
    margin-left: 25%;

  table {
    border-spacing: 0;
    border: 2px solid palevioletred;
    width: 70%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
export default function CartPage(props) {
    const products = store.getState().products;
    let total = 0;
    console.log(store.getState())
    return (
        <Form>
            <Table>
                <h2>Your Cart:</h2>
                <table border-collapse="collapse">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <b>{item.name}</b>
                                        <br />
                                        <p>{item.description.length <= 200 ? item.description : item.description.substring(0, 200)}...</p>
                                    </td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}$</td>
                                    <td hidden>{total += (item.price * item.quantity)}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
                <h3>Total Price: {total}$</h3>
            <Button>
                <Link to="/order">Next</Link>
            </Button>
            </Table>
        </Form>
    )
}