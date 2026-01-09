import React from 'react'

const Object = (props) => {
  return (
    <div>
      <h1>prodect name:{props.products.name} </h1>
      <h2>price:{props.products.price} </h2>
    </div>
  )
}

export default Object;
