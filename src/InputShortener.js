import React from 'react'
import {useState} from 'react'
import './App.css';
import './index.css';
const InputShortener = ({setInputValue}) => {
 const [value,setValue]=useState("")
  const handleClick=()=>{
    setInputValue(value)
    setValue("");
  }
  return (
<div className='inputContainer'>
        <h1>Url <span> shortener</span></h1>
        <div> 


   <input type="text" placeholder="paste a long url"
   value={value}
   onChange={e=>setValue(e.target.value)}
/>

   <button onClick={handleClick}>Shorten</button>
   </div>
    </div>
  )
}

export default InputShortener
