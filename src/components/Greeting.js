'use strict';

var React = require('react/addons');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Subscribe = require('./Subscribe');

//var Actions = require('actions/xxx')

require('styles/Greeting.less');

var Greeting = React.createClass({
  mixins: [],
  getInitialState: function() { return({}); },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <Grid>
            <Row>
                <Col lg={6} className="text-center">
                    <h1>Еженедельный дайджест новостей из мира PHP</h1>
                    <Subscribe />
                </Col>

                <Col lg={6} className="text-center app_greeting_logo">
                    <img classNamr='img-responsive' src="/images/php-logo.png"/>
                </Col>
            </Row>
        </Grid>
      );
  }
});

module.exports = Greeting;

