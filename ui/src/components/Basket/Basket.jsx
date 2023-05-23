import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './Basket.css'
import BasketItem from '../BasketItem/BasketItem.jsx'
export default function Basket() {
  const [input, setInput] = useState('')
  const [prompts, setPrompts] = useState([])
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    const newBasketItems = [
      {
        name: 'bread',
        price: 2,
        hidden: false,
      },
      { name: 'milk', price: 1, hidden: false },
      { name: 'eggs', price: 1.5, hidden: false },
      { name: 'meat', price: 10, hidden: false },
      { name: 'halal meat', price: 10, hidden: false },
    ]
    setBasketItems(newBasketItems)
  }, [])

  const buttons = [
    { label: 'vegetarian', prompt: 'can you give me a vegetarian basket?' },
    { label: 'vegan', prompt: 'can you give me a vegan basket?' },
    { label: 'halal', prompt: 'can you give me a halal basket?' },
  ]

  const buttonHandler = (label) => {
    const button = buttons.find((button) => button.label === label)
    button.hidden = !button.hidden
  }
  return (
    <div className="container">
      <div className="chat">
        <h2>Genie</h2>
        <TextField
          className="input"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              setPrompts([...prompts, input])
            }
          }}
        />
        {buttons.map((button) => {
          return (
            <Button
              onClick={() => {
                setPrompts([...prompts, button.prompt])
                buttonHandler(button.label)
              }}
            >
              {button.label}
            </Button>
          )
        })}

        <div className="convo">
          {prompts.map((prompt, key) => {
            return !prompt.hidden && <div key={key}>{prompt}</div>
          })}
        </div>
      </div>
      <div className="basket">
        <h2>Basket</h2>
        <div>
          {basketItems.map((item, index) => {
            return (
              <BasketItem key={index} name={item.name} price={item.price} />
            )
          })}
        </div>
      </div>
      <div className="summary"></div>
      {/* <div className="chat-icon">
        <span class="material-symbols-outlined">chat</span>
      </div> */}
    </div>
  )
}
