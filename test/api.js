const chai = require('chai');
const request = require('supertest');
const app = require('../index');
chai.should();

describe('API', () => {
  it('get all page histories', (done)=>{
    request(app)
      .get('/pagehistories')
      .set('x-auth-token', 'shhhhh')
      .expect((res)=>{
          res.status.should.equal(200);
      })
      .end(done);
  });
});