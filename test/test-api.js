var app = require('../server/app');
var request = require("supertest").agent(app.listen());
var should = require('should');
var equal = require('deep-equal');

describe('API', () => {

  describe('/api/data', () => {

    it('should return json data which has more than 0 length for data GET /api/data', (done) => {
      request
        .get('/api/data')
        .expect('Content-type','json')
        .expect(200)
        .end((err, result) => {
          
            result.status.should.be.equal(200);
            result.body.length.should.be.above(0);

            done();
        });
    });

  });

  describe('/api/cart', () => {

    it('should return empty object for empty cookie on GET /api/cart', (done) => {
      request
        .get('/api/cart')
        .set('Cookie', 'cart=' + JSON.stringify({}))
        .expect('Content-type','json')
        .expect(200)
        .end((err, result) => {

            result.status.should.be.equal(200);
            equal(result.body, {});

            done();
        });
    });

    it('should return properties populated for valid cookie and valid dataset GET /api/cart', (done) => {
      request
        .get('/api/cart')
        .set('Cookie', 'cart=' + JSON.stringify({items: [{id: 0, count: 1}]}))
        .expect('Content-type','json')
        .expect(200)
        .end((err, result) => {

            result.status.should.be.equal(200);
            result.body.items.length.should.be.above(0);

            done();
        });
    });

    it('should return items.length == 0 for valid cookie and valid dataset DELETE /api/cart', (done) => {
      request
        .delete('/api/cart/0')
        .set('Cookie', 'cart=' + JSON.stringify({items: [{id: 0, count: 1}]}))
        .expect('Content-type','json')
        .expect(200)
        .end((err, result) => {

            result.status.should.be.equal(200);
            result.body.items.length.should.be.equal(0);

            done();
        });
    });

  });


});