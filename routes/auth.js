import bcrypt from "bcrypt";
import Model from "../models/user.js";
import express from "express";
const router = express.Router();

export async function post(req, res) {
  const { email, password } = req.body;

  const user = await Model.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send("Invalid email or password!");
  }
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid email or password!");

  await user.setIsLoggedIn(); // set isloggedin to true




  // await new Model
  // .updateOne({ $set: { role: "admin" } })

  const token = generateAuthToken();
  res.send(token);
  
}

router.post("/login", post);

export default router;


 


