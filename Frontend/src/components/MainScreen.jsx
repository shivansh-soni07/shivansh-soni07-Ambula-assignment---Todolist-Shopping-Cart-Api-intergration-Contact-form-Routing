import React, { useState, useEffect } from "react";
import Todocard from "./Todocard.jsx";
import axios from "axios";

// IT is a main component for Todo App Screen

function MainScreen() {
  const [todoData, settodoData] = useState([]);
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const divStyle = {
    width: "50vw",
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetching data from our Database
  const fetchTodos = async () => {
    try {
      const todo = await axios.get("http://localhost:3000/todo/database");

      settodoData(todo.data);
    } catch (err) {
      console.log(err);
    }
  };

  // adding todo
  const AddTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/todo/add", {
        subject,
        message,
      });
      if (response.status === 200) {
        console.log("Todo added successfully");
        alert("Todo Added Successfully");
        setSubject(" ");
        setMessage(" ");
        fetchTodos();
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // for Deleting todo
  const DeleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/todo/delete/${id}`
      );
      if (response.status === 200) {
        console.log("Todo deleted successfully");
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <center>
      <div style={divStyle}>
        <h1>Todo App</h1>

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={subject}
          style={{ display: "block", padding: "17px" }}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          placeholder="Message"
          name="message"
          value={message}
          style={{ display: "block", padding: "17px" }}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={AddTodo}>Add Todo</button>

        <h1>Existing Todos</h1>
        <h2>Total - {todoData.length}</h2>

        {
          // Mapping all todos using map to display

          todoData &&
            todoData.map((todo) => (
              <Todocard
                key={todo._id}
                todo={todo}
                handleDeleteTodo={DeleteTodo}
              />
            ))
        }
      </div>
    </center>
  );
}

export default MainScreen;
