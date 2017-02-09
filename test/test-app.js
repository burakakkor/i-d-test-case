var app = require('../server/app');
var request = require("supertest").agent(app.listen());
var should = require('should');


describe('Routes', () => {
  it('should return 200 OK on GET /', (done) => {
    request
      .get('/')
      .expect(200, done);
  });

  it('should return 200 OK on GET /api/data', (done) => {
    request
      .get('/api/data')
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200, done);
   });

  it('should return 200 OK on GET /api/cart', (done) => {
    request
      .get('/api/cart')
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200, done);
   });

  it('should return 200 OK on POST /api/voucher with valid voucher code', (done) => {    
    request
      .post('/api/voucher')
      .send({ code: "123" })
      .expect(200, done);
   });

  it('should return 500 OK on POST /api/voucher with invalid voucher code', (done) => {
    request
      .post('/api/voucher')
      .send({ code: "000" })
      .expect(500, done);
   });
});
