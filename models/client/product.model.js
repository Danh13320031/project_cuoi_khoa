import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const objSchema = {
  id: { type: Schema.Types.ObjectId, require: true, unique: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  discountPercentage: { type: Number, require: true },
  stock: { type: Number, require: true },
  thumbnail: { type: String, require: true },
  status: { type: String, require: true },
  position: { type: Number, require: true },
  deleted: { type: Boolean, require: true },
};

const productSchema = new Schema(objSchema, { collection: 'productData' });
const productModel = mongoose.model('productModel', productSchema, 'productData');

export default productModel;
