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

//signClickHandler - gets prompted when a user clicks any sign buttons on the calculator
const signClickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    sign: value,
    val: !calc.res && calc.num ? calc.num : calc.val,
    num: 0,
  });
};


//equalsClickHandler - calculates the result when the equals button is clicked
const equalsClickHandler = () => {
  if (calc.sign && calc.num) {
    const math = (a, b, sign) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;

    setCalc({
      ...calc,
      res:
        calc.num === "0" && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.val), Number(calc.num), calc.sign),
      sign: "",
      num: 0,
    });
  }
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

