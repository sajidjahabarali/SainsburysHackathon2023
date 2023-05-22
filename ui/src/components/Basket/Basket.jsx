import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import './Basket.css'
export default function Basket() {
  const [input, setInput] = useState('')
  const [prompts, setPrompts] = useState([])

  return (
    <div className="container">
      <div className="chat">
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
        <div className="convo">
          {prompts.map((prompt) => {
            return <div>{prompt}</div>
          })}
        </div>
      </div>
      <div className="basket">Basket</div>
      <div className="summary"></div>
      {/* <div className="chat-icon">
        <span class="material-symbols-outlined">chat</span>
      </div> */}
    </div>
  )
}
