'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Greeting = require('./Greeting');
var About = require('./About');


// CSS
require('normalize.css');
require('../styles/main.less');


var PhpweeklyApp = React.createClass({
    render: function () {
        return (
            <div>
                <div id="headerwrap">
                    <Greeting />
                </div>
                <About />
            </div>
        );
    }
});

module.exports = PhpweeklyApp;
