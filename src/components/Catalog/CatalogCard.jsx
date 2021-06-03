import React from 'react'

function CatalogCard(props) {
    // title, price, image, description, category
    return (
        <div>
            <img src={props.image} />
            <h2>{props.title}</h2>
            <span>{props.price}</span>
            <span>{props.category}</span>
            <p>{props.description}</p>
        </div>
    )
}

export default CatalogCard
