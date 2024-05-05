import "./index.css";

const Button = ({ txtBtn, type, onClick, className }) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {txtBtn}
      </button>
    </>
  );
};

export default Button;
