import { request, response, Router } from "express";
import { User } from "../database/Schemas/userSchema.mjs";
import { hashPassword } from "../utils/hashPasswords.mjs";

const router = Router();

router.get("/", (request, response) => {
  response.status(200).send("Base Route");
});

// Add a user to the database
router.post("/api/users", (request, response) => {
  const { body } = request;
  body.password = hashPassword(body.password);
  const newUser = User(body)
    .save()
    .then(() => console.log("User successfully added to database"))
    .catch((error) => {
      console.log(error);
      return response.status(400);
    });
  return response.status(200).json(body);
});

//get all users
router.get("/api/users", async (request, response) => {
  try {
    const users = await User.find({}, { password: false });
    if (!users) return response.status(200).send({ msg: "No data available" });
    return response.status(200).json(users);
  } catch (error) {
    response.sendStatus(400);
  }
});

//get a single user through email
router.get("/api/users/:email", async (request, response) => {
  try {
    const { email } = request.params;

    const findUser = await User.find({ email: email }, { password: false });
    if (!findUser)
      return response.status(400).send({ msg: "No such user found" });
    response.status(200).send(findUser);
  } catch (error) {
    response.sendStatus(400);
  }
});

// update a user using email
router.put("/api/users/:email", async (request, response) => {
  try {
    const { body } = request;
    const { email } = request.params;
    const updatedUser = await User.updateOne({ email: email }, { $set: body });
    if (!updatedUser.matchedCount === 1)
      return response.status(400).send({ msg: "No such user found" });

    response.status(200).send(updatedUser);
  } catch (error) {
    response.sendStatus(400);
  }
});

// this router wont work as the above router creates ambiguity.. But this is the way to update through Id

// router.put("/api/users/:id", async (request, response) => {
//   try {
//     const { body } = request;
//     const { id } = request.params;

//     const updatedUser = await User.updateOne({ _id: id }, { $set: body });
//     if (!updatedUser.matchedCount === 1)
//       return response.status(400).send({ msg: "No such user found" });

//     response.status(200).send(updatedUser);
//   } catch (error) {
//     response.sendStatus(400);
//   }
// });

// delete a user through email
router.delete("/api/users/:email", async (request, response) => {
  try {
    const { email } = request.params;
    const deletedUser = await User.deleteOne({ email: email });
    if (deletedUser.deletedCount !== 1)
      return response.status(400).send({ msg: "No such user found" });
    return response.send(deletedUser);
  } catch (error) {
    response.sendStatus(500);
  }
});

export default router;
