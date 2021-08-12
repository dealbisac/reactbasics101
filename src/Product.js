import React from 'react'
import ItemDescription from './ItemDescription'

function Product({ name, description, price }) {
    return (
        <div>
            <ItemDescription name={name} description={description} />
            <h1>$ {price}</h1>

        </div>
    )
}

export default Product
