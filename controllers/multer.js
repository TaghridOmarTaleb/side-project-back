// import multer from "multer";
// import transloadit from "transloadit";

// const transloadit = new transloadit({
//   authKey: process.env.authKey,
//   authSecret: process.env.authSecret,
// });

// export function post('/upload', upload.single('file'), (req, res) => {
//   transloadit.createAssembly({
//     template_id: 'YOUR_TEMPLATE_ID',
//     params: {
//       steps: {
//         encode: {
//           use: ':original',
//           robot: '/video/encode',
//           preset: 'h264'
//         }
//       }
//     },
//     files: {
//       file: req.file.buffer
//     }
//   }).then((result) => {
//     // handle the result
//   }).catch((error) => {
//     // handle the error
//   });
// });

// // Init
// // const transloadit = new Transloadit({
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
