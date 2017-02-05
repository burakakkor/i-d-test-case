var app = require('../app');
var request = require("supertest");
var should = require('should');

describe('API', () => {

  it('should return more than 0 on api/data', (done) => {
    request(app.listen())
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