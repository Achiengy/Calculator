import './App.css';
import Button from './components/Button';
import Frame from './components/Frame';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Calc-screen';



function App() {

  return (
   
      <div className="App">
            <Frame>
              <Screen value="0"/>
                <ButtonBox>
                  <Button
                    className=""
                    value="0"
                    onClick={() => {
                      console.log("Button Clicked!");
                    }}
                  />
                </ButtonBox>
            </Frame>
      </div>
  );
}

export default App;

