'use strict';

var React = require('react/addons');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
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
                <Col lg={12} className="col-lg-12 text-center app_greeting">
                    <h1>Еженедельный PHP</h1>
                    <p className="lead">Еженедельная рассыдка новостей мира PHP</p>
                </Col>
            </Row>
        </Grid>
      );
  }
});

module.exports = Greeting;

