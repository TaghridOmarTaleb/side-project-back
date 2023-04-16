import bcrypt from "bcrypt";
import Model from "../models/user.js";
import express from "express";
const router = express.Router();

export async function post(req, res, next) {
  const { email, password } = req.body;

//   const user = await Model.findOne({ email });
// console.log(user);

const user = await Model.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send("Invalid email or password!");
  }
  const validPassword = await bcrypt.compare(password , user.password);
//   console.log("password:", password, "user.password:", user.password);


  if (!validPassword) return res.status(400).send("Invalid email or password!");
  const token = generateAuthToken();
  res.send(token);
}

router.post('/', post);

export default router;
