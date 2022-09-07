import env from "dotenv";
env.config();
import mongoose from "mongoose";
const { MONGODB_URL } = process.env;
const connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected successfully"))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
};
export default connect;
