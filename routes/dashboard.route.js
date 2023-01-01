const DataRouter = require('express');
const dashboardController = require('../controllers/dashboard.controller.js')
const router = DataRouter()

router.get('/tasks', dashboardController.getDailyTasks)
router.get('/progress', dashboardController.getCurrentProgress)
router.get('/word', dashboardController.getRandomWord)
router.get('/promo', dashboardController.getPromotions)
router.get('/random', dashboardController.refreshRandomWord)

module.exports = router