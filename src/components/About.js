'use strict';

var React = require('react/addons');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Features = require('./Features');
require('styles/About.less');

var About = React.createClass({

    render: function () {
        return (
            <Grid>
                <Row className='mt centered'>
                    <Col lg={6} lgOffset={3} className="text-center">
                        <h1>Eженедельная рассылка <br />новостей из мира PHP.</h1>

                        <h3>Обзор статей статей, блогов и подкастов - бесплатно и один раз в неделю.</h3>
                    </Col>

                </Row>
                <Features />
            </Grid>
        );
    }
});

module.exports = About;

