const router = require('express').Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.homePage);

router.get('/random', homeController.randomPage);

router.get('/contact', homeController.contactPage);

router.post('/contact', homeController.sendMail);

module.exports = router;