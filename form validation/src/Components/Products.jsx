import React from 'react';

const Products = (props) => {
    return ( 
        <div>
            <h2>{props.product.id}. {props.product.name}-- price: {props.product.price}</h2>
        </div>
     );
}
 
export default Products;