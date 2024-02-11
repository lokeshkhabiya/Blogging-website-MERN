import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

function App() {


  return (
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/sign-in" element = {<Signin />}/>
      <Route path="/sign-up" element = {<SignUp />}/>
      <Route path="/dashboard" element = {<Dashboard />}/>
      <Route path="/projects" element = {<Projects />}/>
    </Routes>
  )
}

export default App
