import Model from "../models/user.js";
import bcrypt from "bcrypt";

//get all users
export function getAll(req, res, next) {
  Model.find()
    .then((response) => {
      console.log(response);
      res.status(200).send({ success: true, response });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

// get a user by id
export function getById(req, res, next) {
  console.log("params:", req.params);
  let { id } = req.params;
  Model.findOne({ _id: id })
    .then((response) => {
      console.log(response);
      res.status(200).send({ success: true, response });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

//identifier a user
export async function get(req, res) {
  try {
    const user = await Model.findById(req.user._id);

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

// create a user
export async function post(req, res, next) {
  const { email, password, firstName, lastName } = req.body;
  try {
    const user = await Model.findOne({ email });
    if (user) {
      return res.status(400).send("User already registered"); //we dont need it bcz email is unique (in schema)
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const doc = new Model({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await doc.save();

    const token = doc.generateAuthToken();

    res.header("x-auth-token", token).status(200).send({
      success: true,
      message: "User created successfully",
      doc,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ message: "Could not create user, please try again later" });
  }
}

//delete a user
export function deleteUser(req, res) {
  let { id } = req.params;
  Model.findOneAndDelete({ _id: id })
    .then((response) => {
      console.log(response);
      res.status(200).send({ success: true, response });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const controller = { deleteUser, post, get, getById, getAll };
export default controller;
