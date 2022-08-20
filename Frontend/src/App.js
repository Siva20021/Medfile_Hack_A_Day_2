import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/about";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main1/Main1";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<Main />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;