var fs = require('fs');
var path = require('path');
var Cookies = require('cookies');
var _ = require('lodash');

var _data = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/assets/data.json')), 'utf8');

module.exports = {
  getData: (req, res) => {
    res.json(_data);
  },
  getCart: (req, res) => {  
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    res.json(cart ? cart : {"items": []});
  },
  postCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var product = req.body;

    // checking if we have that product in our dataset and it should has to be in stock.
    var _product = _.find(_data, {id: product.id});

    if (_product && _product.stock > 0) {

      // If cookie is empty, create new one.
      if (!cart) {
        cart = { items: [] };
      }

      var _cart = JSON.parse(cart);
      console.log(_cart);
      _cart.items.push(_product);
      console.log(JSON.stringify(_cart));
      cookies.set("cart", JSON.stringify(_cart));

      res.sendStatus(200);
    }
    else {
      res.sendStatus(500);
    }
  }
}
