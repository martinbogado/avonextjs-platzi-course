import React, { useState, useEffect } from 'react'
import { TProduct } from '../index'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window.fetch('/api/avo')
    .then(response => response.json())
    .then(({ data, length}) => {
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {
        productList.map((product) => (
          <div>{product.name}</div>
        ))
      }
    </div>
  )
}

export default HomePage
