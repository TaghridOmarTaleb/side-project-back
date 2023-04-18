// import express from "express";
// const router = express.Router();
// import controller from '../controllers/multer.js';





// router.post('/oneImg', upload.single('avatar'), controller.handleProfileUpload)

// router.post('/arrayOfImg', upload.array('photos', 12), controller.handlePhotosUpload)

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

// router.post('/arrayOfFiles', cpUpload, controller.handleCoolProfileUpload)


// export default router;

// // yarn add transloadit || npm i transloadit --save-exact

// // Import
// const Transloadit = require('transloadit')

// // Init
// const transloadit = new Transloadit({
//   authKey: process.env.authKey,
//   authSecret: process.env.authSecret,
// })

// // Set Encoding Instructions
// const options = {
//   files: {
//     myfile_1: './file.jpg',
//   },
//   params: {
//     template_id: 'fb6afcfcb2b749c18b4ccd31e569adb6',
//   },
// }

// // Execute
// const result = await transloadit.createAssembly(options)

// // Show results
// console.log({ result })


