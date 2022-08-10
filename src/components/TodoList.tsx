import "./styles.css";
import { Todos } from "../model";
import SingleTodos from "./SingleTodos";

interface Props {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  console.log(todos, "todos ");
  return (
    <div className="todos">
      {todos.map((todo) => (
        // <h1>{todo.id}</h1>
        <SingleTodos
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
