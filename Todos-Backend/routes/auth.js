let express = require('express');
let router = express.Router();
let { Users } = require('../db');

router.post("/signup", async (req, res, next) => {
  const { username } = req.body;

  try {
    let user = {
      username,
    };

    let registeredUser = await Users.createUser(user);

    res.status(201).json({
      payload: {
        user: registeredUser,
        msg: "User created",
      },
      err: false
    })

  } catch (err) {
    if (err.message === "Username not available. Please try a different one.") {
      res.status(409).json({
        payload: {
          msg: err.message
        },
        err: true
      })
    } else {
      next(err);
    }
  }
})

module.exports = router;
