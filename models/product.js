import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name of the product"],
      trim: true,
      minlength: [10, "Name must be at least 10 characters"],
      maxlength: [30, "Name cannot be more than 30 characters"],
      match: [
        /^[A-Z][A-Za-z\s]+$/,
        "Name must start with a capital letter and only contain letters and spaces",
      ],
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
    },
    price: {
      type: Number,
      required: [true, "Please add the price"],
      min: [0, "Price cannot be negative"],
      get: (v) => Math.round(v), //for old products (read value)
      set: (v) => Math.round(v), // set value
    },
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "LBP"],
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Please add the product's brand"],
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        validate: {
          isAsync: true,
          validator: function (v, callback) {
            setTimeout(() => {
              const result = v && v.length > 0;
              callback(result);
            }, 1000);
          },
          message: "A product should have at least one category",
        },
      },
    ],
    image: {
      type: Schema.Types.ObjectId,
      ref: "File",
      required: [true, "Please add an image"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    expiryDate: {
      type: Date,
      required: [true, "Please add the expiry date of the product"],
      validate: {
        validator: function (inputValue) {
          const regex = /^\d{2}-\d{2}-\d{4}$/;
          const expiryDate = new Date(inputValue);
          return regex.test(inputValue) && expiryDate.getTime() > Date.now();
        },
        message: (props) =>
          `${props.value} is not a valid expiry date in the format dd-mm-yy.`,
        //use calender in the frontend!
      },
    },
    image: {
      type: Buffer, //Data represented in binary form
      required: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

productSchema.pre(["find", "findOne"], function () {
  this.populate([
    "brand",
    "category",
    //"image"
  ]);
});

const Product = model("Product", productSchema);
export default Product;
