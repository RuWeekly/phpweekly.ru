'use strict';

describe('PhpweeklyApp', function () {
  var React = require('react/addons');
  var PhpweeklyApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PhpweeklyApp = require('components/PhpweeklyApp.js');
    component = React.createElement(PhpweeklyApp);
  });

  it('should create a new instance of PhpweeklyApp', function () {
    expect(component).toBeDefined();
  });
});
