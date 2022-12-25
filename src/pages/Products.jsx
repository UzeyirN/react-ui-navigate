import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Products = () => {
  const PRODUCT_URL = 'https://jsonplaceholder.typicode.com/photos'
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  axios.get(PRODUCT_URL).then((response) => {
    console.log("axios data - ", response.data);
    setProducts(response.data)
    setLoading(false)
  });
  return (
    <>
      {loading ? <div>loading...</div> :
        <ul class="list-group list-group-flush">
          {products && products.map((product) => {
            return <li class="list-group-item" key={product.id}><b>TITLE</b> : <Link to={`/products/${product.id}`}>{product.title}</Link></li>

          })}

        </ul>
      }
    </>
  )
}

export default Products