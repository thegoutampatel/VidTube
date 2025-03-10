import { app } from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3000;

//this is for connection with DB.
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on Port : ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`MongoDB Connection Error ${e}`);
  });
