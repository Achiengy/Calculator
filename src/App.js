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

  //numClickHandler - function is triggered if the numbers btwn (0-9) are clicked
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (calc.num.length < 10) //numbers entered upto 10 integers long
    {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.val,
      });
    }
  };

  //commaClickHandler - function gets prompted if the decimal point is clicked
  const commaClickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

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

