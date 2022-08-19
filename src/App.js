import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import About from "./About";

function App() {

  const blogs = [
    {
      id: 1,
      title: "Blog_one",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    },
    // {
    //   id: 2,
    //   title: "Blog_two",
    //   body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    // },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage blogs={blogs} />}></Route>
        <Route path="/blog/:id" element={<Blog blogs={blogs} />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
