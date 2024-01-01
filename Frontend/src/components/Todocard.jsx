import React from 'react';

const Todocard = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {


  // It is TOdo CArd component 
  return (
    <center>

      <div style={{padding:"10px" , border:"2px solid black"}}>

      <li key={todo._id}>
      <h3>{todo.subject}</h3>
      <p>{todo.message}</p>
      <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
      
    </li>

  </div>
    </center>
  );
};

export default Todocard;
