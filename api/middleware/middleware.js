const User = require('../users/users-model');

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

function validateUserId(req, res, next) {
  const { id } = req.params;
  User.getById(id)
    .then(result => {
      if(result) {
        req.user = result;
        next();
      } else {
        res.status(404).json({ message: "user not found" });
        return;
      }
    });
  }

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger, 
  validateUserId,
  validateUser,
  validatePost
}