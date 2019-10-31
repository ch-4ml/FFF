const express = require('express');
const router = express.Router();
// const userRouter = require('./user');   // userRouter
const quizRouter = require('./quiz');    // quizRouter

// router.use(userRouter);
router.use(quizRouter);

const moment = require('moment'); require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

module.exports = router;