import React from 'react'
import BookDescription from './bookDescription';
import BookDetails from './bookDetails';
import PurchaseDetails from './purchaseDetails';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Td = styled.td`
  width: 70%;
  padding-left: 5rem;
`;

const GET_BOOKS_DESCRIPTION = gql`
query Books {
  books {
    id
    name
    author
    ratings
    description
    publisher
    language
    paperback
    price
    store {
      name
    }
  }
}
`;
export default function BookDetailsPage() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_BOOKS_DESCRIPTION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.filter(book => book.id === params.bookId).map(({ id, name, author, ratings, description, publisher, language, paperback, price }, i) => (
    <table>
      <tr>
        <Td>
          <BookDescription key={name} id={id} name={name} author={author} ratings={ratings} description={description} />
        </Td>
        <Td>
          <PurchaseDetails id={id} name={name} description={description} price={price} storeName={data.books[i].store.name} />
        </Td>
      </tr>
      <tr>
        <Td>
          <BookDetails key={id} id={id} publisher={publisher} language={language} paperback={paperback} />
        </Td>
      </tr>
    </table>
  ));
}
