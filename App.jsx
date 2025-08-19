import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([ ]);
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]); // Add the new value to the todo array
      setInputValue(""); // Clear the input field after adding
    }
  };

  const removeTodo = (index) => {
    setTodo(todo.filter((item, i) => i !== index)); // Remove the item with the matching index
  };



  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="add" onClick={addTodo}>
        AddList
      </button>
      <ul>
        {todo
    .filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    ).map((list, index) => (
          <li className="list" key={index}>
            {list}
            <span>
              <button className="btn" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </span>
          </li>
          
        ))}
      </ul>
      
        
      <input
  className="input"
  value={search}
  placeholder="Filter Todo"
  type="text"
  onChange={(e) => setSearch(e.target.value)}
/>



    </div>
  );
};

export default App;
