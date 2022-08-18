import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import About from "./About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
