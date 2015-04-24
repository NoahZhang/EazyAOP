/**
 * EazyAOP tests
 */

var fs = require('fs')
  , EazyAOP = require('../eazyaop')
  , expect = require('expect.js')
  , path = require('path')
  , should = require('should');

describe('EazyAOP', function() {
  it('creates new EazyAOP instance', function(done) {
    var aop = new EazyAOP();
    aop.should.be.instanceOf(EazyAOP);
    done();
  });

  it('inject property should have before and after', function(done) {
    var aop = new EazyAOP();
    aop.inject.should.have.property('before');
    aop.inject.should.have.property('after');
    done();
  });

  it('aop for sync method', function(done) {
    var aop = new EazyAOP();
    var counter = 0;

    aop.inject.before = function () {
      counter++;
    };

    aop.inject.after = function() {
      counter++;
    };

    aop.wrapSync(function() { counter++; });
    aop.executeSync();

    counter.should.equal(3);
    done();
  });

  it('aop for async method', function(done) {
    var aop = new EazyAOP();
    var counter = 0;

    var packagePath = path.join(__dirname, '..', 'package.json');

    aop.inject.before = function () {
      counter++;
    };

    aop.inject.after = function() {
      counter++;
    };

    var promise = aop.wrapAsync(fs.readFile);
    promise(packagePath).then(function(data) {
      var name = JSON.parse(data).name;

      name.should.equal("EazyAOP");
      counter.should.equal(2);
      done();
    });
  });
});
