import React from 'react';
// REACT MODULE => JSX 
// JSX =. COMPILE => babel 
import './style.css';
import Child from "./components/Child"
// props
// render
// componet lifecycle.

export default function App() {

  let name ="Ahmad";
  let arr = [1,2,3,4,5];

  return (
    <div>
      <h1>hii</h1>
      <Child name={{name,arr}}/>
    </div>
  );
}
