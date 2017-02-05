var app = require('../src/server/app');
var request = require("supertest").agent(app.listen());
var should = require('should');


describe('Routes', () => {
  it('should return 200 OK on /', (done) => {
    request
      .get('/')
      .expect(200, done);
  });

  it('should return 200 OK on /api/data', (done) => {
    request
      .get('/api/data')
      .expect('Content-type','application/json; charset=utf-8')
      .expect(200, done);
   });
});
