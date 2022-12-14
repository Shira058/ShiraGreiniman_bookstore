import React from 'react'
import Book from './book';
export default function StorePage() {

  const books = []

  return (
    <div>
      {books.map((item) => {
        return <Book />;
      })}
    </div>
  )
}
