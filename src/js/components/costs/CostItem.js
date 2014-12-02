'use strict';
var React = require('react');
var InputForm = React.createFactory(require('./InputForm'));
var InputLabel = React.createFactory(require('./InputLabel'));

var CostItem = React.createClass({
    render: function () {
        return (
          <section className="col-md-9 col-md-offset-1">
                <div>
                  <InputLabel area= {this.props.area} />
                  <InputForm area= {this.props.area} />
                </div>
          </section>
        );
    }
});

module.exports = CostItem;
