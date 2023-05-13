const userRouter = require('./user');

const router = async (app) => {
  app.use('/api/users', userRouter);
};

module.exports = router;
