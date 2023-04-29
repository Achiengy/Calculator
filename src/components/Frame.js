import "./Frame.css";

function Frame ({children}){
    return (
     <div className="frame">
       {children}
     </div>
    )
};

export default Frame;