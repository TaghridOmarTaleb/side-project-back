import multer from "multer";


// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 1024 * 1024 * 5 // 5MB
//   }
// });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

export default upload;