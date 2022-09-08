import env from "dotenv";
env.config();
import connect from "./config/database.js";
connect(process.env.MONGODB_URL);
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import User from "./model/user.js";

import blogData from "./data.js";

const apt = express();
apt.use(express.json());
apt.use(cookieParser());

const port = process.env.PORT || 4000;

apt.get("/api", (req, res) => {
  res.send("<h1>go to /api/v1 or /api/v2  for api routes</h1>");
});
apt.get("/api/v1", (req, res) => {
  res.send("Welcome");
});
apt.get("/api/v1/blogs", (req, res) => {
  console.log("GET on Blog Data");
  res.status(200).json(blogData);
});

apt.post("/api/v1/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!(email && password && firstname && lastname)) {
      res.status(400).send("All fields are required");
    }
    const existingUser = await User.findOne({ email }); // PROMISE
    if (existingUser) {
      res.status(401).send("User already exists");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    //TOKEN
    jwt.sign({ user_id: user._id }, process.env.SECRET_JWT_KEY, {
      expiresIn: "2h",
    });
    user.token = token;
    user.password = undefined;
    user.status(210).json("Created:\n", user);
  } catch (error) {
    console.log(error);
  }
});

apt.post("/api/v1/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Missing field");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("Wrong Email");
    }
    if (user && bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_JWT_KEY,
        { expiresIn: "2h" }
      );
      user.token = token;
      user.password = undefined;
      // res.status(200).json(user);
      //cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res
        .status(200)
        .cookie("token", token, options)
        .json({ success: true, token, user });
    }
    res.status(400).send("Password does not match.");
  } catch (error) {}
});

apt.listen(port, () => {
  console.log(`Server serving on port ${port}`);
});
