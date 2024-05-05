import "./index.css";

import TodoItem from "../todoItem/TodoItem";

const TodoList = ({deleteTodo, todoData, editTodo}) => {
  return (
    <div className="todo__list">
      <ul>
        {todoData &&
          todoData.map((todo) => {
            return <TodoItem key={todo.id} todoItem={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
