var express = require('express');
var router = express.Router();

console.log(
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(path.join(__dirname, 'public/dist/index.html'));
})
)
module.exports = router;