import { useSelector } from "react-redux";
import { Todo } from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <ul className="list-group mt-4">
        {todos.map((eachTodo) => (
          <Todo key={eachTodo.id} id={eachTodo.id} title={eachTodo.title} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;