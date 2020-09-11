const express= require('express');
const path= require('path');
const router= express.Router();
const apiController= require('../controllers/api/api_controller')

router.post('/createtoken', apiController.creteSession)

module.exports=router;