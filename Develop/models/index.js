// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { model } = require('../config/connection');

// Products belongsTo Category
Product.belongesToMany(Category);
// Categories have many Products
Category.belongesToMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongesToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'types_of_products'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongesToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'list_of_products'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
