import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Header />
      <ListTask />
    </div>
  );
}

export default App;
