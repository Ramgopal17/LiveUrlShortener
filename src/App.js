import React ,{useState}from "react";
import InputShortener from './InputShortener';
import './App.css';
import './index.css'
import BackgroundAnimate from "./BackgroundAnimate";
import LinkResult from "./LinkResult";


function App() {
    const [inputValue,setInputValue]=useState("")
  return (
    <div className="container">

      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimate/>
      <LinkResult inputValue={inputValue} />

      </div>
  );
}

export default App;
