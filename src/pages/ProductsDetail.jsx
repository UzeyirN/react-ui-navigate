import React, { useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {

    const [product, setProduct] = useState({})
    let BASE_URL = 'https://jsonplaceholder.typicode.com/photos'
    const { id } = useParams()

    axios.get(`${BASE_URL}/${id}`).then((response) => {
        console.log("axios user detail - ", response.data);
        setProduct(response.data)
    });
    return (
        <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-success">Album ID:{product.albumId}</li>
            <li class="list-group-item list-group-item-success">TITLE:{product.title}</li>
            <li class="list-group-item list-group-item-success">URL:{product.url}</li>
            <li class="list-group-item list-group-item-success">ThumbnailUrl :{product.thumbnailUrl}</li>


        </ul>
    )
}

export default ProductsDetails