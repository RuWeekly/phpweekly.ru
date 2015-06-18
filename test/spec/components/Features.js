'use strict';

describe('Features', function () {
  var React = require('react/addons');
  var Features, component;

  beforeEach(function () {
    Features = require('components/Features.js');
    component = React.createElement(Features);
  });

  it('should create a new instance of Features', function () {
    expect(component).toBeDefined();
  });
});
