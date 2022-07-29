import "./index.css";

const Button = ({
  btnTextContent = "Click",
  color = "#0fffa3",
  type = "button",
  className = "Button",
  onHandleClick = () => {},
}) => {
  return (
    <button
      onClick={onHandleClick}
      type={type}
      className={className}
      style={{ backgroundColor: color }}
    >
      {btnTextContent}
    </button>
  );
};

export default Button;
