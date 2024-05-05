import "./index.css";

const Header = ({ headerTitle }) => {
  return (
    <div className="header__container">
      <h1>{headerTitle}</h1>
    </div>
  );
};

export default Header;
