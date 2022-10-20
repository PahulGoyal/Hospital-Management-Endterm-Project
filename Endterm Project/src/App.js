import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Venues from "./Components/Pages/Venues/Venues";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import View from "./Components/Users/View";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="bgimg">
                <Home />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <div id="maps">
                <Contact />
              </div>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/users/addvenues" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;