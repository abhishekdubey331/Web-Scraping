let express = require('express');
let router = express.Router();
const asyncHandler = require('express-async-handler');
let count = require('../helpers');
let Recipe = require('../models/model_recipes');


router.get('/', (req, res) => {

        count.getData(req,res)

});


module.exports = router;