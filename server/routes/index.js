const Router = require('express');
const router = new Router();
const achivmentRouter = require('./achivmentRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter);
router.use('/achivment', achivmentRouter);

module.exports = router