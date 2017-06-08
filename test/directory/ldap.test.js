/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../app/directory/ldap');


describe('directory/ldap', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/ds/createDirectoryImpl');
    expect(factory['@singleton']).to.be.undefined;
  });
  
});
