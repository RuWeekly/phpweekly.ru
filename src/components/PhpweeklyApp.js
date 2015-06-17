'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Greeting = require('./Greeting');


// CSS
require('normalize.css');
require('../styles/main.less');


var PhpweeklyApp = React.createClass({
    render: function () {
        return (
            <div id="headerwrap">
                <Greeting />
            </div>
        );
    }
});

module.exports = PhpweeklyApp;
