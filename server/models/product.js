const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
quantity: { type: Number, required: false },
  category: { type: String, required: true },
},{
  collection:"product"
}
);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;