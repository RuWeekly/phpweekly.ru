'use strict';

var React = require('react/addons');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

require('styles/Features.less');

var Features = React.createClass({

  render: function () {
    return (
        <Row className='mt centered'>
            <Col lg={4}>
                <i className="fa fa-github-alt fa-4x"></i>
                <h4>1 Community-driven новости</h4>
                <p>Новости и интересные материалы собираются сообществом php разработчиков. Каждый может внести свой вклад в составление дайджеста. <br /> <a href="https://github.com/RuWeekly/PHPWeekly">Предложить материал &raquo;</a></p>
            </Col>
            <Col lg={4}>
                <i className="fa fa-pencil-square-o fa-4x"></i>

                <h4>2 Премодерация</h4>
                <p> Участники сообщества производят рецензирование списка статей и занимается подготовкой рассылки, отбирая только актульные и полезные материалы. <br /> <a href="https://github.com/RuWeekly/PHPWeekly">Помочь с рецензированием &raquo;</a></p>
            </Col>
            <Col lg={4}>
                <i className="fa fa-envelope-o  fa-4x"></i>

                <h4>3 Рассылка</h4>
                <p> Каждую неделю мы рассылаем материалы подписчикам.Мы не передаем email адреса третим лицам и рассылаем только релевантные материалы и только один раз в неделю. <br /> <a href="http://phpweekly.ru">Подписаться &raquo;</a></p>
            </Col>
        </Row>
      );
  }
});

module.exports = Features;

