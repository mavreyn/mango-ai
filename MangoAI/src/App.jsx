import { useEffect, useState } from "react"
import React from 'react';
import './App.css'
import MathRenderer from "./MathRenderer";
import MathInput from "./MathInput";
import RenderButton from "./RenderButton";

function App() {
  const [userMath, setUserMath] = useState("")
  const [mathExp, setMathExp] = useState("")

  return (
    <>
      <h1>MangoAI</h1>
      <p>Typing mathematics with AI</p>
      <div id="interface">
        <MathInput makeUpdate={setUserMath}/>
        <MathRenderer mathExpression={userMath} />
      </div>
    </>
  );
}

export default App;