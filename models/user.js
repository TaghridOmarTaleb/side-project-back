import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add your first name"],
      trim: true,
      match: [
        /^[A-Za-z\s]+$/,
        "the first name must only contain letters and spaces",
      ],
    },
    lastName: {
      type: String,
      required: [true, "Please add your last name"],
      trim: true,
      match: [
        /^[A-Za-z\s]+$/,
        "the last name must only contain letters and spaces",
      ],
    },
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      required: true,
      default: "user",
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email address is required"],
      trim: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Invalid email address"],
    },
    password: {
      type: String,
      required: true,
      //unique: true,
      select: false, //exclude the password field from query results by default
      validate: [
        {
          validator: function (password) {
            return /[A-Z]/.test(password);
          },
          message: "Password must contain at least one uppercase letter",
        },
        {
          validator: function (password) {
            return /[@#$%&*]/.test(password);
          },
          message:
            "Password must contain at least one special character (@#$%&*)",
        },
        {
          validator: function (password, inputValue) {
            return password.length >= 8;
          },
          message: "Password must be at least 8 characters long",
        },
        {
          validator: function (password, inputValue) {
            const firstName = inputValue.firstName;
            const lastName = inputValue.lastName;
            return !(
              password.includes(firstName) || password.includes(lastName)
            );
          },
          message: "Password cannot contain the first or last name",
        },
      ],
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// userSchema.pre("save", async function () {
//   if (this.isModified("password")) {
//     const saltRounds = 10;
//     const hash = await bcrypt.hash(this.password, saltRounds);
//     this.password = hash;
//     validateUser(hash, this.password);
//   }})

//   function validateUser(hash, password) {
//     bcrypt
//       .compare(password, hash)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.error(err.message));
//   }
// });

// userSchema.post("save", async function(){
// //assure if its the same pass
// } )
// // assuming you have a User model
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid email or password' });
//   }
//   const match = await user.validateUser(password);
//   if (!match) {
//     return res.status(401).json({ message: 'Invalid email or password' });
//   }
//   // user has successfully authenticated
//   // generate and return a JWT token or session cookie
// });

const User = model("User", userSchema);
module.exports = User;
