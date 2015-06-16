'use strict';

var React = require('react/addons');

var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');

require('styles/Subscribe.less');

var Subscribe = React.createClass({

    getInitialState() {
        return {
            email: '',
            isValid: false
        };
    },

    validationState() {
        let email = this.state.email;
        let length = email.length;
        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if (re.test(email)) {
            this.state.isValid = true;
            return 'success';
        }
        else if (length > 4) {
            this.state.isValid = false;

            return 'warning';
        }
        else if (length > 0) {
            this.state.isValid = false;
            return 'error';

        }
    },

    handleChange() {
        this.setState({
            email: this.refs.input.getValue()
        });
    },
    handleSubmit(event) {
        if (!this.state.isValid) {
            event.preventDefault();
        }
    },

    render: function () {
        return (
            <div className="app_subscribe">
                <form lg={12} onSubmit={this.handleSubmit} action="http://eepurl.com/bqqj4T" method='GET'>
                    <div className="input-group">
                        <Input
                            type='text'
                            placeholder='Ваш Email'
                            bsStyle={this.validationState()}
                            hasFeedback
                            ref='input'
                            bsSize="large"
                            groupClassName='group-class'
                            labelClassName='label-class'
                            name='EMAIL'
                            onChange={this.handleChange}/>
                    <span className="input-group-btn">
                        <ButtonInput
                            type="submit"
                            className='app_subscribe__submit'
                            bsSize='large'
                            value='Ok'
                            bsStyle='primary'
                            />
                    </span>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Subscribe;

