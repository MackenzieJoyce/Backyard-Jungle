const router = require('express').Router();
const { Category } = require('../models');

router.get('/', async (req, res) => {
    console.log('communities route TEST!');

    const categoryData = await Category.findAll().catch((err) => { 
        res.json(err);
      });
        const categories = categoryData.map((category) => category.get({ plain: true }));
        res.render('communities', { layout: 'main', categories });
      });

module.exports = router;