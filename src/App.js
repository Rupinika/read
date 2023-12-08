import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Write from "./Components/Write";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
