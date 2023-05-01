//import { Textfit } from "react-textfit";
import './Calc-screen.css';

function Screen ({value}) {
    return (
         <div className="screen" mode="single" max={70}>
            {value}
         </div>
         )
};

export default Screen;