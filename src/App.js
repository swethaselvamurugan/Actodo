import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";

function App() {
  var [users, setUsers] = useState([{username: "swetha", password: "1234"}])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers}></Login>}></Route>
        <Route path='/signup' element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
