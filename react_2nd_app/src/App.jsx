
// import './App.css'

// // we need to wrap all elements inside container (eg: div, section or anything)
// function App() {
//   const a = "hi";
//   const num = 123
//   const t = true;
//   const f = false;
//   const n = null;
//   const u = undefined;
//   const arr = ["hi",123,"wow",num,undefined,true,false]
//   const obj = {name:"pooji",age:23}
//   return  <section className="container">
//         <h1>Hi hello {a}</h1> 
//         <p>pooji</p>
//         <h6>number {num}</h6>
//         <div>
//           <ol>
//             <li>{t}</li>
//             <li>{f}</li>
//             <li>{n}</li>
//             <li>{u}</li>
//             <li>{arr}</li>
//             <li>{JSON.stringify(obj)}</li>
//             <li>{obj.name} {obj.age}</li>
//           </ol>
//         </div>
//   </section>


  
// }

// export default App



import React from "react";

function App() {
  // JavaScript values to render with JSX
  const name = "Poojitha";
  const age = 21;
  const isStudent = true;
  const subjects = ["Python", "React", "Django"];
  const user = { city: "Hyderabad", country: "India" };

  return (
    <div className="parent" style={{ padding: "20px", textAlign: "center" }}>
      {/* Parent Div */}
      <h2>JSX Data Display</h2>

      {/* Child Div 1: Displaying Basic Data Types */}
      <div className="child1" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}>
        <h3>Basic Data Types:</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>

      {/* Child Div 2: Displaying Arrays and Objects */}
      <div className="child2" style={{ backgroundColor: "#d8f8e1", padding: "10px", margin: "10px" }}>
        <h3>Complex Data Types:</h3>
        <p>Subjects: {subjects.join(", ")}</p>
        <p>Location: {user.city}, {user.country}</p>

        {/* Rendering array as JSX list */}
        <h4>Subjects List:</h4>
        <ul>
          <li>{subjects[0]}</li>
          <li>{subjects[1]}</li>
          <li>{subjects[2]}</li>
        </ul>

      </div>
    </div>
  );
}

export default App;

