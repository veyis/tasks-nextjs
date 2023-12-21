'use client';

import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)
  console.log('ClientPage')
  return (
    <div>
        <h1 className="text-7xl">{count} </h1>
        <button className="btn btn-primary" 
        onClick={() => setCount(count + 1)}>Increment</button>
        </div>
  )
}

export default ClientPage

