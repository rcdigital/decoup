'use strict';
var React = require('react');
var InputForm = React.createFactory(require('./InputForm'));
var InputLabel = React.createFactory(require('./InputLabel'));

var CostItem = React.createClass({
    getInitialState: function () {
      return {rowStyle: false};
    },
    updateData: function (e) {
      this.setState({rowStyle: true});
    },

    render: function () {
        return (
          <section className="col-md-9 col-md-offset-1">
                <div>
                  <InputLabel onClick={this.updateData} area= {this.props.area} />
                  <InputForm area= {this.props.area} />
                </div>
          </section>
        );
    }
});

module.exports = CostItem;
