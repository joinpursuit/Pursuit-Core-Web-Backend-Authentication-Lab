var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    payload: "Welcome. Read the Docs before starting. There should be a README at the root directory of this project.",
    err: false
  })
});

router.all('/', (req, res, next) => {
  res.status(405).json({
    payload: "Nah, nah, nah",
    err: true
  })
})

module.exports = router;
