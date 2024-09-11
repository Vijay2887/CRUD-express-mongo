import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.mjs";
const app = express();

app.use(express.json());
app.use(userRoute);

mongoose
  .connect("mongodb://localhost:27017/CRUD_Operations")
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
