// var express = require('express');
// var router = express.Router();
// var categories = [{id:1, category:""}, {id:6, category:"gist"}];

// /* GET Categories page. */
// router.get('/', function(req, res, next) {
//   res.json(categories);
// });

// router.post('/:id', function(req, res) {
//   catId = req.params.id;
//   const newCategories = req.body;
//   newCategories.id = catId;
//   categories.push(newCategories);
//   res.json(categories);
// });

// router.put('/:id', function(req, res) {
//   updateCategories = req.body;
//   catId = req.params.id;
//   categories.forEach(categoryyy => {
//     if (categoryyy.id === parseInt(catId)){
//       categoryyy.category = updateCategories.category;
//     }
//   })
//   res.json(categories);
//   });

//   router.delete('/:id', function(req, res) { 
//   res.json({categories:categories.filter(categoryyy => categoryyy.id !== parseInt(req.params.id))});
//   });
  
// module.exports = router;