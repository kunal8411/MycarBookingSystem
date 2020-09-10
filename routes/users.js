const express= require('express');
const path= require('path');
const router= express.Router();

const home_controller= require('../controllers/home_controller');
const { route } = require('.');
// const { showuser } = require('../controllers/users_controller');


const user_controller= require('../controllers/users_controller')
router.get('/login',home_controller.login)

router.post('/createsession', home_controller.createsession)


router.get('/showuser', user_controller.showuser)
module.exports=router;