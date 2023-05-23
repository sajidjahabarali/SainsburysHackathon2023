import React from 'react'

export default function BasketItem(props) {
  return (
    <div className="basketitem-container">
      <div>{props.name}</div>
      <div>£{props.price}</div>
    </div>
  )
}
