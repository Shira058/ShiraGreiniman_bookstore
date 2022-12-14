import React from 'react';
import Book from './book';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const Container = styled.section`
display: inline-block;
margin: 2.5rem;
`;

const GET_BOOKS = gql`
query Books {
  books {
    id
    store_id
    name
    author
    type
    price
    description
  store {
      name
    }
  }
}`;

export default function StorePage() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.filter(book => book.store_id === params.storeId).map(({ id, description, name, author, type, price },i) => (
    <Container>
      <Book key={id} id={id} name={name} author={author} type={type} price={price} description={description} storeName={data.books[i].store.name} />
    </Container>
  ));
}
