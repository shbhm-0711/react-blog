import env from "dotenv";
env.config();

import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header("Authorization").repalce("bearer ", "");
  if (!token) {
    res.send("missing token");
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.user = data;
  } catch (error) {
    console.log(error);
    return res.status(401).send("Invalid Token");
  }
  return next();
};
