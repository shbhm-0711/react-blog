import { createContext, useContext } from "react";
export const blogsVal = [
  {
    id: 1,
    title: "Blog_one",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "B",
  },
  {
    id: 2,
    title: "Blog_two",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "A",
  },
  {
    id: 3,
    title: "Blog_Three",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "C",
  },
  {
    id: 4,
    title: "Blog_Four",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "B",
  },
  {
    id: 5,
    title: "Blog_Five",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "B",
  },
  {
    id: 6,
    title: "Blog_Six",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "C",
  },
  {
    id: 7,
    title: "Blog_Seven",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "A",
  },
  {
    id: 8,
    title: "Blog_Eight",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
    author: "A",
  },
];
export const BlogContext = createContext(blogsVal);
// console.log(useBlog, "this is hook shit");
