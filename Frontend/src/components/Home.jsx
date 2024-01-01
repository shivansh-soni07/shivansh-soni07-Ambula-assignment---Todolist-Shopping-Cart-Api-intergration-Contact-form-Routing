import React from 'react';
import '../styles/home.css'
import 'animate.css'; 


// HOme Page content -- used animate.css to add some animations


const Home = () => {
  return (<>
    <div className="home-container animate__animated animate__fadeIn">
      <h1 className="animate__animated animate__bounceInDown">Welcome to Our Website</h1>
      <p className="animate__animated animate__fadeIn">We are thrilled to have you here. Explore our amazing products and services.</p>
    </div>

    <center>
    
    <div className="tasks animate__animated animate__fadeIn">
    <h2>Assignment Details</h2>
      <p>All the tasks given in the assignment were completed.</p>
      <ul className='tasks animate__animated animate__bounceInDown'>
        <li className='tasks animate__animated animate__fadeIn'>Todo List✅</li>
        <li>Shopping Cart✅</li>
        <li>Api Integration (Weather Api) ✅</li>
        <li>Routing using React Router ✅</li>
        <li>Use React Context, Fetch, CSS Styles ✅</li>
        <li>Store Shopping Items with Name, Color, and Prices ✅</li>
      </ul>

    </div>
    </center>
    
  </>
  );
};

export default Home;
