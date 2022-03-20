import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TProduct } from '../../index'

const ProductPage = () => {
  const { query } = useRouter()
  const productId = query.id

  const [AvocadoDetail, setAvocadoDetail] = useState<TProduct>()

  useEffect(() =>{
    window.fetch(`/api/avo/${productId}`)
    .then(response => response.json())
    .then((data) => {
      setAvocadoDetail(data)
    })
    .catch( err => new Error(err) )
  },[productId])

  return (
    <section>
      <h1>Página producto: {productId}</h1>
      { AvocadoDetail ?
      <div>
      <h3>{AvocadoDetail.name}</h3>
      <h3>{AvocadoDetail.price}</h3>
      <h3>{AvocadoDetail.sku}</h3>
      <img src={AvocadoDetail.image} />
      <p>{AvocadoDetail.attributes.description}</p>
      <p>{AvocadoDetail.attributes.hardiness}</p>
      <p>{AvocadoDetail.attributes.shape}</p>
      <p>{AvocadoDetail.attributes.taste}</p>
      </div>
      : '' }
    </section>
  )
}

export default ProductPage
