module.exports = function (wallaby) {
  return {
    files: [
      'src/server/*.js'
    ],

    tests: [
      'test/*.js'
    ],

    testFramework: 'mocha',
    delays: {
        run: 500
    }
  };
};