import { Router } from "express";
import {
  addUserToDb,
  deleteUser,
  getAllUsers,
  singleUser,
  updateUser,
} from "../Controller/User/userControllers.mjs";

const router = Router();

router.get("/", (request, response) => {
  response.status(200).send("Base Route");
});

// Add a user to the database
router.post("/api/users", addUserToDb);

//get all users
router.get("/api/users", getAllUsers);

//get a single user through email
router.get("/api/users/:email", singleUser);

// update a user using email
router.put("/api/users/:email", updateUser);

// delete a user through email
router.delete("/api/users/:email", deleteUser);

export default router;
