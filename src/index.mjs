import express from "express";
import connectDb from "./connection.mjs";
import userRoute from "./routes/userRoute.mjs";

const app = express();
app.use(express.json());

//database connection
connectDb
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

//listen to the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});

//routes
app.use(userRoute);
