const express = require('express'),
    router = express.Router(),
    restaurantModel = require('../models/restaurantModel');

router.get('/', async function (req, res, next) {
    const data = await restaurantModel.getAllRestaurants();
    res.render('template', {
        locals: {
            title: 'Restaurant List',
            data: data
        },
        partials: {
            partial: 'partial-index'
        }
    });     
});

router.get('/:r_id', async function(req, res, next) {
    const { r_id } = req.params;
    const data = await restaurantModel.getRestaurantById(r_id);
    const reviewList = await restaurantModel.getReviewsByRestaurantId(r_id);
  
    res.render('template', {
      locals: {
        title: data[0].name,
        data: data,
        reviewList: reviewList
      },
      partials: {
        partial: 'partial-single'
      }
    });
  });

router.post('/', async function(req, res) {
    const { restaurant_id, review_title, review_text } = req.body;
    const postData = await restaurantModel.addReview(parseInt(restaurant_id), review_title, review_text);
    console.log(postData);

    res.sendStatus(200);
});

module.exports = router;