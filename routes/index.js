var express = require('express');
var router = express.Router();
var WEBMs = [];
var WEBMsLink = [];
var sIP;
/* WEBM parser */
function ParseWebms(req){
  var ip = req.connection.remoteAddress || req.headers['x-forwarded-for'];
  const testFolder = 'E:/www/public/webm';
  const fs = require('fs');
  WEBMs = [];
  WEBMsLink = [];
  fs.readdirSync(testFolder).forEach(file => {
    WEBMs.push(file);
    WEBMsLink.push("webm/"+file)
  })
  WEBMs.sort();
  WEBMsLink.sort();
  console.log('[+] GET Request from: ' + ip);
  sIP = ip;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  ParseWebms(req);
  res.render('index', { WEBM_list: WEBMs, WEBMLink_list: WEBMsLink});
});

module.exports = router;
