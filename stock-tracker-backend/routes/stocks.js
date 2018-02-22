var express = require('express');
var router = express.Router();

// on get request return stocks from backend
router.get('/', function(req, res, next) {
  res.json({stocks: [
            {
                stockTicker: 'FB',
                numberShares: 14
            },
            {
                stockTicker: 'AMZN',
                numberShares: 1000
            }
        ]});
});

module.exports = router;