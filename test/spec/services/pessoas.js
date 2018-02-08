'use strict';

describe('Service: pessoas', function () {

  // load the service's module
  beforeEach(module('bstkApp'));

  // instantiate service
  var pessoas;
  beforeEach(inject(function (_pessoas_) {
    pessoas = _pessoas_;
  }));

  it('should do something', function () {
    expect(!!pessoas).toBe(true);
  });

});
