import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import brandRoutes from "./routes/brand.js";
import categoryRoutes from "./routes/category.js";
import fileRoutes from "./routes/file.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";

dotenv.config();

await connectDB();

const PORT = process.env.PORT || 3002;

const app = new express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  // combined
}

// if (process.env.NODE_ENV === "development") {
//   app.use(
//     morgan(function (tokens, req, res) {
//       return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens["response-time"](req, res),
//         "ms",
//       ].join(" ");
//     })
//   );
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/brands", brandRoutes);
app.use("/categories", categoryRoutes);
app.use("/files", fileRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
);