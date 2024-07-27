const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  Category.findAll().then(data => 
    {res.json(data).end()}
  )
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  Category.findAll({
    attributes: ['id']
  }).then(data =>
  {res.json(data).end()}
  );
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  Category.create(
    {id:'10', category_name:'games'}
  ).then(data => 
  {res.json(data).end()}
  )
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const newId = await Category.create ({id: 1 });
  newId.id = 11;
  await newId.save();
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
