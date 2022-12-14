import React from 'react'
import Store from './store';
import BookDetails from './bookDetails';
export default function HomePage() {

  const stors = []

  return (
    <div>
      {stors.map((item) => {
        return <Store />;
      })}
    </div>
  )
}
