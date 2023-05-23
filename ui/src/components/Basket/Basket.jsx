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
      { name: 'apple', price: 0.5, hidden: false },
    ]
    setBasketItems(newBasketItems)
  }, [])

  const vegetarian = ['bread', 'milk', 'eggs', 'apple']
  const vegan = ['bread', 'apple']
  const halal = ['bread', 'milk', 'eggs', 'apple', 'halal meat']

  const dietaryButtons = [
    { label: 'vegetarian', prompt: 'can you give me a vegetarian basket?' },
    { label: 'vegan', prompt: 'can you give me a vegan basket?' },
    { label: 'halal', prompt: 'can you give me a halal basket?' },
  ]

  const budgetButtons = [1, 3, 5, 10, 20]

  const buttonHandler = (label) => {
    // const item = basketItems.find((item) => item.label === label)

    switch (label) {
      case 'vegetarian':
        setBasketItems(
          basketItems.map((item) => {
            if (!vegetarian.includes(item.name)) {
              item.hidden = true
            } else {
              item.hidden = false
            }
            return item
          })
        )
        break
      case 'vegan':
        setBasketItems(
          basketItems.map((item) => {
            if (!vegan.includes(item.name)) {
              item.hidden = true
            } else {
              item.hidden = false
            }
            return item
          })
        )
        break
      case 'halal':
        setBasketItems(
          basketItems.map((item) => {
            if (!halal.includes(item.name)) {
              item.hidden = true
            } else {
              item.hidden = false
            }
            return item
          })
        )
        break
      default:
        break
    }
  }
  return (
    <div className="container">
      <div className="chat">
        <h2>Shop Genie</h2>
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
        {dietaryButtons.map((button) => {
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
          {basketItems.map((item) => {
            console.log(item)
            return (
              !item.hidden && <BasketItem name={item.name} price={item.price} />
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
