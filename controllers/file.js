import Model from "../models/file.js";

// class controller {
  //get all files
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

  

  //get a file by id
  export function   getById(req, res, next) {
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

  //create a new file
  export function   post(req, res, next) {
    let body = req.body;
    console.log(body);
    let doc = new Model(body);
    doc
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).send({ success: true, response });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  //update a file
  export function   put(req, res) {
    let { id } = req.params;
    let body = req.body;
    Model.findOneAndUpdate({ _id: id }, { $set: body }, { new: true})
      .then((response) => {
        console.log(response);
        res.status(200).send({ success: true, response });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  //delete a file
  export function  deleteFile(req, res) {
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

  
  const controller = {deleteFile, getAll, getById, put, post};

export default controller;