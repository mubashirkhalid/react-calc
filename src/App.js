import { useState } from "react";

import * as math from "mathjs";

import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {  
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  
  const calculateResult = () => {
    const input = text.join("") // Remove Commas

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult(""); 
  };
  
  const buttonColor = "Orange";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
   <div className="row">
      < Button symbol="AC" handleclick={resetInput} />
      < Button symbol="+/-" handleclick={addToText} />
      < Button symbol="%" handleclick={addToText} />
      < Button symbol="/" color={buttonColor} handleclick={addToText} />
      </div>
      <div className="row">
      < Button symbol="7" handleclick={addToText} />
      < Button symbol="8" handleclick={addToText} />
      < Button symbol="9" handleclick={addToText} />
      < Button symbol="*" color={buttonColor} handleclick={addToText} />
      </div>
      <div className="row">
      < Button symbol="4" handleclick={addToText} />
      < Button symbol="5" handleclick={addToText} />
      < Button symbol="6" handleclick={addToText} />
      < Button symbol="-" color={buttonColor} handleclick={addToText} />
      </div>
      <div className="row">
      < Button symbol="1" handleclick={addToText} />
      < Button symbol="2" handleclick={addToText} />
      < Button symbol="3" handleclick={addToText} />
      < Button symbol="+" color={buttonColor} handleclick={addToText} />
      </div>
      <div className="row">
      < Button symbol="0" handleclick={addToText} />
      < Button symbol="." handleclick={addToText} />
      < Button symbol="="  color={buttonColor} handleclick={calculateResult} />
      </div>
    </div>
  </div>
  );
};

export default App;
