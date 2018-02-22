var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // res.json({stocks: [
  //           {
  //               stockTicker: 'FB',
  //               numberShares: 14
  //           },
  //           {
  //               stockTicker: 'AMZN',
  //               numberShares: 1000
  //           }
  //       ]});
});

module.exports = router;