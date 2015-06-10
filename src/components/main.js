'use strict';

var PhpweeklyApp = require('./PhpweeklyApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PhpweeklyApp}>
    <Route name="/" handler={PhpweeklyApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
