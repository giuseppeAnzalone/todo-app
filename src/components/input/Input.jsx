import "./index.css";

import { useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";

import Button from "../button";

const Input = ({ placeHolder, addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      alert("Inserisci il testo!");
      return;
    }
    setInputValue("");
    addTodo(inputValue);
  };

  return (
    <>
      <form className="form__container" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder={placeHolder}
          value={inputValue}
          onChange={onInputChange}
          className="input__todo"
        />
        <Button
          txtBtn={<RiAddBoxFill />}
          type="submit"
          className="input__button"
        />
      </form>
    </>
  );
};

export default Input;
