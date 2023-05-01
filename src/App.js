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

  return (
   
      <div className="App">
            <Frame>
              <Screen value="0"/>
               <ButtonBox>
        {
          buttonValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
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

