
import React from "react";
import CarDetails from "./components/CarDetails";
import UserInfo from "./components/UserInfo";
import ProductCard from "./components/ProductCard";
import Welcome from "./components/Welcome";
import { Child1 } from "./components/children";
import {Child2} from "./components/children2";

function App() {
  return (
    <div>
      <h1>General props</h1>
      <h1>Task-1</h1>
      <UserInfo name="Pooji" age="23" />
      <h1>Task-2</h1>
      <ProductCard productName="Laptop" price="₹65,000" category="Electronics" />
      <h1>Task-3</h1>
      <Welcome userName="Pooji" />
      <h1>Task-4</h1>
      <CarDetails brand="Tesla" model="Model S" year="2024" />

      <h1>Children props</h1>
      <Child1 name="pooji" />
      <div>
        <h3 style={{color:"tomato"}}>Good Morning</h3>
      </div>
      <Child2 name="Child2"/>
      
    </div>
  );
}

export default App;