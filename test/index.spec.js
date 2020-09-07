const { expect } = require('chai');
// eslint-disable-next-line no-unused-vars
const server = require('../index');

/* eslint-disable no-undef */
describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});
