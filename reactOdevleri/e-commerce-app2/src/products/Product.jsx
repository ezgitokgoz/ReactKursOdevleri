import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product() {
  const{productId}=useParams()
  const[product,setProduct]=useState({})

  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .then(err => console.error(err))
      
  },[productId])
  return (
    <>
    <h1>{product.title}</h1>
    <img src={product.image} alt="" className='w-100 img-thumbnaail' />
    <p>{product.description}</p>
    
    </>
  )
}

export default Product
