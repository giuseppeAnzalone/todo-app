import "./index.css";

import React, { useState } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import Button from "../button";

const TodoItem = ({ todoItem, deleteTodo, editTodo }) => {
  const [editable, setEditable] = useState(false);
  const [editedValue, setEditedValue] = useState(todoItem.value);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  const handleSaveClick = () => {
    editTodo(todoItem.id, editedValue);
    setEditable(false);
  };

  return (
    <li className="todo__container">
      <div className="todo__wrapper">
        <input
          type="text"
          value={editable ? editedValue : todoItem.value}
          onChange={handleInputChange}
          disabled={!editable}
          className="todo__text"
        />
        {editable ? (
          <Button
            txtBtn={<FaSave />}
            onClick={handleSaveClick}
            className="todo__button"
          />
        ) : (
          <Button
            txtBtn={<MdEdit />}
            onClick={handleEditClick}
            className="todo__button"
          />
        )}
        <Button
          txtBtn={<FaTrash />}
          onClick={() => deleteTodo(todoItem.id)}
          className="todo__button"
        />
      </div>
    </li>
  );
};

export default TodoItem;
