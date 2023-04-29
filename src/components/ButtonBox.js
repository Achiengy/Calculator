import './ButtonBox.css';

function ButtonBox ( {children}){
    return (
         <div className="buttonBox">
       {children}
     </div>
    )
};

export default ButtonBox;