var fs = require('fs');
var path = require('path');
var Cookies = require('cookies');
var _ = require('lodash');

var _data = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/assets/data.json')), 'utf8'),
    _vouchers = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/assets/vouchers.json')), 'utf8');

var getItemsFromCart = function(cart) {
  return JSON.parse(cart).items;
}

var getJsonResult = function(items) {
  var itemIds = [], products = [], total = 0;

  itemIds = _.map(items, 'id');

  products = _(_data).keyBy('id').at(itemIds).value();

  products = _.map(products, function (product) {    
    product.count = _.find(items, { id: product.id}).count;
    product.total = product.price * product.count;
    return product;
  });

  total = _.sumBy(products, 'total');

  return {items: products, total: total, currency: 'GBP'};
}

module.exports = {
  getData: (req, res) => {
    res.json(_data);
  },
  getCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var items = [], result = {};

    if (cart) {
      items = getItemsFromCart(cart);

      result = getJsonResult(items);
    }

    res.json(result);
  },
  addProductToCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var items = [];

    // if cart is already in cookie, parse products from it.
    if (cart) {
      items = getItemsFromCart(cart);
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
        // increase count
        item.count++;
      }

      // update cookie.
      cookies.set("cart", JSON.stringify({items: items}));
    }

    res.sendStatus(200);
  },
  deleteProductFromCart: (req, res) => {
    var cookies = new Cookies(req, res);
    var cart = cookies.get("cart");

    var items = [], result = {};

    // if cart is already in cookie, parse products from it.
    if (cart) {
      items = getItemsFromCart(cart);
    }

    // id from body. check api.js and params are string
    var id = parseInt(req.params.id);

    // checking if we have that product in our dataset and it should has to be in stock.
    var originalProduct = _.find(_data, {id:id});

    // double check
    if (originalProduct && originalProduct.stock > 0) {

      // add new item to list
      var item = _.find(items, {id: id});

      if (!item) {
        // create new cart-item
        items.push({id: originalProduct.id, count: 1});
      }
      else {
        // decrease count
        item.count--;

        // if item.count === 0 we need to clear it from items list.
        if (item.count === 0) {
          _.remove(items, {id:id});
        }
      }

      result = getJsonResult(items);
    }

    // update cookie.
    cookies.set("cart", JSON.stringify({items: items}));

    res.json(result);
  },
  checkVoucher: (req, res) => {
    // code from body. check api.js
    var code = req.body.code,
        cart = req.body.cart;
    
    // find voucher by code, check user entered valid one
    var voucher = _.find(_vouchers, {code: parseInt(code)});

    if (voucher) {
      // get total
      var total = cart.total;

      // get all selected items category ids
      var categoryIds = _.map(cart.items, 'category.id');

      // discount default value
      var discount = 0;

      if (voucher.categories.length > 0) {
        // if selected item is in voucher category list
        var isIncludeCategory = _.intersection(voucher.categories, categoryIds).length > 0;

        // And total should be over of voucher.spendlimit and then we could apply discount 
        var isOverSpendLimit = total >= voucher.spendlimit;
        
        if (isIncludeCategory && isOverSpendLimit) {
          discount = voucher.discount;
        }
      }
      else {
        discount = voucher.discount;
      }

      res.status(200).json({discount: discount})
    }
    else {
      res.sendStatus(500);
    }
  }
}
