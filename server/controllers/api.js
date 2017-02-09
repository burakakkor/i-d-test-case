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

    var items = [], itemIds = [], products = [], total = 0;

    if (cart) {
      items = JSON.parse(cart).items;
      itemIds = _.map(items, 'id');

      products = _(_data).keyBy('id').at(itemIds).value();

      products = _.map(products, function (product) {
        product.count = _.find(items, { id: product.id}).count;
        return product;
      });

      total = _.sumBy(products, 'price');
    }

    res.json({items: products, total: total, currency: 'GBP'});
  },
  postCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var items = [];

    // if cart is already in cookie, parse products from it.
    if (cart) {
      items = JSON.parse(cart).items;
    }

    // id from body. check api.js
    var id = req.body.id;

    // checking if we have that product in our dataset and it should has to be in stock.
    var originalProduct = _.find(_data, {id: id});

    if (originalProduct && originalProduct.stock > 0) {

      // add new item to list
      var item = _.find(items, {id: id});

      if (!item) {
        items.push({id: originalProduct.id, count: 1});
      }
      else {
        // increate count
        item.count++;
      }

      // update cookie.
      cookies.set("cart", JSON.stringify({items: items}));
    }

    res.sendStatus(200);
  },
  deleteCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var items = [];

    if (cart) {
      items = JSON.parse(cart).items;
    }

    var params = req.params.id;

    // id from params. check api.js
    var id = parseInt(params.productId);

    var originalProduct = _.find(_data, {id: id});

    var cookieItem = _.find(items, {id: id});

    console.log(cookieItem);

    if (cookieItem) {
      var cookieItemObj = JSON.parse(cookieItem);
    }

    if (originalProduct && originalProduct.stock > 0) {

      products = _.remove(products, { id: id });

      console.log('düstü');

      // update cookie.
      //cookies.set("cart", JSON.stringify({products: products}));
    }

    res.sendStatus(200);
  },
}
