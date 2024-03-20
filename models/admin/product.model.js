import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const objSchema = {
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true, default: 0 },
  discountPercentage: { type: String, require: true, default: 0 },
  rating: { type: Number, require: true },
  stock: { type: Number, require: true },
  brand: { type: String, require: true },
  category: { type: Number, require: true },
  thumbnail: { type: String, require: true, default: 'Image Error' },
  images: { type: Array, require: true },
};

const productSchema = new Schema(objSchema, { collection: 'productData' });

const productModel = mongoose.model('productModel', productSchema, 'productData');

export default productModel;
