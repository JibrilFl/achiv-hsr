const Router = require('express');
const router = new Router();
const achivmentController = require('../controllers/achivmentController');

router.post('/', achivmentController.create);
router.get('/', achivmentController.getAll);
router.get('/:id', achivmentController.getOne);
router.delete('/:id', achivmentController.deleteOne);

module.exports = router