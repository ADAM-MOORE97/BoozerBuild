import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { Navbar } from "./components/Navbar";
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";
import { Career } from "./components/Career";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Career" element={<Career/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    {/* <Menu/> */}
    <Footer/>
    </div>
  );
}

export default App;
