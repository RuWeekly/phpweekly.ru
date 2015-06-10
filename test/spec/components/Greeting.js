'use strict';

describe('Greeting', function () {
  var React = require('react/addons');
  var Greeting, component;

  beforeEach(function () {
    Greeting = require('components/Greeting.js');
    component = React.createElement(Greeting);
  });

  it('should create a new instance of Greeting', function () {
    expect(component).toBeDefined();
  });
});
