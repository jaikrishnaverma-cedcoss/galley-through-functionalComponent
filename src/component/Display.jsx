import React from 'react';
function Display(props) {
    return ( 
        <>
        <div id={`product-${props.data.id}`} className="product">
            <img src={props.data.image} />
            <h3 className="title"><a href="#">{props.data.name}</a></h3>
            <span>Price: ${props.data.price}</span>
            <a className="add-to-cart" href="#">Add To Cart</a>
        </div>
        </>
     );
}

export default Display;
