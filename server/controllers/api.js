var fs = require('fs');
var path = require('path');
var Cookies = require('cookies');

module.exports = {
  getData: (req, res) => {  
    var json = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/assets/data.json')), 'utf8');
    res.json(json);
  },
  getCart: (req, res) => {  
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    res.json(cart ? cart : []);
  },
  postCart: (req, res) => {
    console.log(req.body);

    res.sendStatus(200);
  }
}
