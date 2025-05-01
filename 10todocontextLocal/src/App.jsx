// React سے useState اور useEffect hooks کو import کیا
import { useEffect, useState } from "react";

// TodoProvider کو context سے import کیا
import { TodoProvider } from "./context";

// App کے لئے CSS فائل import کی
import "./App.css";

// TodoForm اور TodoItem components import کئے
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  // Todos کو handle کرنے کے لیے ایک state بنائی
  const [todos, setTodos] = useState([]);

  // نیا Todo add کرنے کا function
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // کسی existing Todo کو update کرنے کا function
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Todo کو delete کرنے کا function
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Todo کی completed حالت کو toggle کرنے کا function
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // جب App load ہو تو localStorage سے todos کو نکال کر state میں رکھے
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // جب بھی todos میں کوئی تبدیلی ہو تو اسے localStorage میں save کرے
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    // Context Provider کے ذریعے پوری app میں todos اور ان کے functions کو accessible بنایا
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/* Main Container */}
      <div className="bg-[#172842] min-h-screen py-8">
        {/* Inner Container */}
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          {/* App کا Title */}
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          {/* Todo Form */}
          <div className="mb-4">
            {/* یہاں TodoForm component render ہو رہا ہے */}
            <TodoForm />
          </div>

          {/* Todos کی List */}
          <div className="flex flex-wrap gap-y-3">
            {/* todos کو loop کر کے ہر todo کے لیے TodoItem دکھایا جا رہا ہے */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

// App component کو export کیا
export default App;
