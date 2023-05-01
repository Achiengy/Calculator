import React, { useState } from "react"
import './App.css';
import Button from './components/Button';
import Frame from './components/Frame';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Calc-screen';


const buttonValues = [
  ["AC","-/+","%","/"],
  [7, 8, 9,"*"],
  [4, 5, 6,"-"],
  [1, 2, 3,"+"],
  [0, ".", "="],
];


function App() {
  let [calc, setCalc] = useState ({
    sign: "",  //selected sign
    num: 0,   //entered value
    val: 0,  //calculated value
  });

  return (
   
      <div className="App">
            <Frame>
               <Screen value={calc.num ? calc.num : calc.val} />
               <ButtonBox>
        {
          buttonValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "AC"
                  ? resetClickHandler
                  : btn === "-/+"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
                }
              />
            );
          })
        }
      </ButtonBox>
            </Frame>
      </div>
  );
};

export default App;

