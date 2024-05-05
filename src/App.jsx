import "./App.css";

import { useState } from "react";
import { VscClearAll } from "react-icons/vsc";

import Header from "./components/header";
import Input from "./components/input";
import TodoList from "./components/todoList";
import Button from "./components/button";
import NavBar from "./components/navBar";

function App() {
  const [todoData, setTodoData] = useState([]);

  const addTodo = (inputValue) => {
    const todos = {
      id: Math.floor(Math.random() * 1000),
      completed: false,
      value: inputValue,
    };

    setTodoData((oldList) => [todos, ...oldList]);
  };

  const editTodo = (id, newValue) => {
    setTodoData((oldList) =>
      oldList.map((todo) =>
        todo.id === id ? { ...todo, value: newValue } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoData(() => todoData.filter((todo) => todo.id !== id));
  };

  const deleteTodos = () => {
    setTodoData(() => []);
  };

  return (
    <>
      <Header headerTitle="Todo App" />
      <div>
        <Input placeHolder="Add Todo" addTodo={addTodo} />
      </div>
      <TodoList
        todoData={todoData}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <div className="container__clearAllBtn">
        <Button
          txtBtn={<VscClearAll />}
          onClick={deleteTodos}
          className="clear__allBtn"
        />
      </div>
      <NavBar />
    </>
  );
}

export default App;
