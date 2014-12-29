'use strict';
var React = require('react');
var InputForm = React.createFactory(require('./InputForm'));
var InputLabel = React.createFactory(require('./InputLabel'));

var CostItem = React.createClass({
    getInitialState: function () {
      return {rowStyle: false};
    },
    updateData: function () {
      this.setState({rowStyle: true});
    },

    render: function () {
        return (
          <section className="col-md-9 col-md-offset-1">
                <div>
                  <InputLabel rowStyle={this.state.rowStyle} onClick={this.updateData} name= {this.props.area.name} highCost= {this.props.area.highCost} lowCost = {this.props.area.lowCost} />
                  <InputForm rowStyle={this.state.rowStyle} name= {this.props.area.name} highCost= {this.props.area.highCost} lowCost = {this.props.area.lowCost} />
                </div>
          </section>
        );
    }
});

module.exports = CostItem;
