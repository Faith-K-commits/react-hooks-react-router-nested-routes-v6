import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:4000/users")
    .then(r => r.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error));
}, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* Signal parent component to render different components as children depending on the route a user visits */}
      <Outlet context={users} />
    </>
  );
};

export default App;
