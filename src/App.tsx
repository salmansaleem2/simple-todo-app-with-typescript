import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todos } from "./model";
import TodoList from "./components/TodoList";

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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">
        Taskify
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </span>
    </div>
  );
};

export default App;
