import React from 'react';
import ItemDescription from './ItemDescription';
import styles from './Product.module.css';

function Product({ name, description, price }) {
    return (
        <div className={styles.product}>
            <ItemDescription name={name} description={description} />
            <h2 className={styles.errors}>An error occured</h2>
            <h1 className={styles.price}>$ {price}</h1>

        </div>
    )
}

export default Product
