var app = require('../src/server/app');
var request = require("supertest").agent(app.listen());
var should = require('should');

describe('API', () => {

  describe('/api/data', () => {

    it('should return json data which has more than 0 length', (done) => {
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

});