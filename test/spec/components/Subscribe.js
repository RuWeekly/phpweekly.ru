'use strict';

describe('Subscribe', function () {
  var React = require('react/addons');
  var Subscribe, component;

  beforeEach(function () {
    Subscribe = require('components/Subscribe.js');
    component = React.createElement(Subscribe);
  });

  it('should create a new instance of Subscribe', function () {
    expect(component).toBeDefined();
  });
});
