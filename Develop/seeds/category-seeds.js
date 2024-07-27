const { Category } = require('../models');

const categoryData = [
  {
    id: 2,
    category_name: 'Shirts',
  },
  {
    id: 3,
    category_name: 'Shorts',
  },
  {
    id: 4,
    category_name: 'Music',
  },
  {
    id: 5,
    category_name: 'Hats',
  },
  {
    id: 6,
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
