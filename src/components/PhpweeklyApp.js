'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Greeting = require('./Greeting');
var Subscribe = require('./Subscribe');


// CSS
require('normalize.css');
require('../styles/main.less');


var PhpweeklyApp = React.createClass({
    render: function () {
        return (
            <div>
                <Greeting />
                <Subscribe />
            </div>
        );
    }
});

module.exports = PhpweeklyApp;
