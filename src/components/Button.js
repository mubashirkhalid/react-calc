import "./Button.css";

const Button = ({ symbol, color, handleclick }) => {
    return (
    <div 
        onClick={() => handleclick(symbol)}
        className="button-wrapper"
        style={{ backgroundColor: color}}
    >
        {symbol}
    </div>
  );
};

export default Button;