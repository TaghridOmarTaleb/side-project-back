import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const brandSchema = new Schema({
   name: {
       type: String,
       required: [true, "Please add the brand's name"],
       trim: true,
       minlength: [10, "Description must be at least 10 characters"],
       maxlength: [30, "Name cannot be more than 30 characters"],
       match: [
        /^[A-Z][A-Za-z\s]+$/,
        "Name must start with a capital letter and only contain letters and spaces",
      ],
   },
  
}, {
   collection: 'brands'
});

const Brand = model('Brand', brandSchema);
export default Brand;