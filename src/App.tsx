import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todos } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { act } from "react-dom/test-utils";

// let name: string = "salman";
// let age: number | string;
// let isStudent: boolean = true;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => void;
// let printName: Function;

// function printName(name: string) {
//   console.log(name);
// }
// printName("Salman ");

// role = [2, "salmam"];

// type Person = {
//   name: string;
//   age?: number;
// };
// let lotsOfPerson: Person[];

// let person: Person = {
//   name: "salman",
// };

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todos[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">
          Taskify
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </span>
      </div>
    </DragDropContext>
  );
};

export default App;
