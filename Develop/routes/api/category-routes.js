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
    {id: req.body.id, category_name: req.body.category_name}
  ).then(data => 
  {res.json(data).end()}
  )
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  await Category.update(
  {
    category_name: (req.body.category_name)
    },
    {
      where: {
        id: (req.params.id),
      },
  },
 ).then(data =>
 {res.json(data).end()}
 )
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where: {
        id: (req.params.id),
      },
  },
 ).then( () =>
 {res.send('Successfully deleted row.').end()
 }
)
});

module.exports = router;
