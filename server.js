const express = require('express');
const routes = require('./Develop/routes');
const PORT = process.env.PORT || 3001;
const sequelize = require('./Develop/config/connection.js')
const seedCategories = require('./Develop/seeds/category-seeds.js');
const seedProducts = require('./Develop/seeds/product-seeds.js');
const seedProductTags = require ('./Develop/seeds/product-tag-seeds.js')
const seedTags = require('./Develop/seeds/tag-seeds.js')



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.authenticate()
  .then(function (){
    console.log("connected");
  })
  .catch (function (err){
    console.log ("failed to connect" + err);
  });

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

