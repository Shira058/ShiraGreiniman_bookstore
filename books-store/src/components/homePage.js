import React from 'react'
import Store from './store';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const GET_STORES = gql`
query Stores {
  stores {
    address
    city
    id
    name
    lang
  }
}`;

const Container = styled.section`
display: inline-block;
margin: 0 20px;
text-align: center;
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_STORES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.stores.map(({ id, name, address, city }) => (

      <Container>
        <Store key={id} id={id} name={name} address={address} city={city} />
      </Container>
    
  ));
}
