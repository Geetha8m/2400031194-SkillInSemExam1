import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <h1>Props Children Example</h1>

      <Card>
        <h2>Welcome</h2>
        <p>This card displays text using props.children.</p>
      </Card>

      <Card>
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
          className="card-img"
        />
        <p>Reusable Card containing an image!</p>
      </Card>

      <Card>
        <button className="btn">Click Me</button>
      </Card>
    </div>
  );
}

export default App;
