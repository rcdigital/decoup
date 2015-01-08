'use strict';
var React = require('react');
var InputForm = React.createFactory(require('./InputForm'));
var InputLabel = React.createFactory(require('./InputLabel'));

var CostItem = React.createClass({

    getInitialState: function () {
      return {
        rowStyle: false,
        name: this.props.area.name,
        highCost: this.props.area.highCost,
        lowCost: this.props.area.lowCost
      };
    },

    onChangeName: function (value) {
      this.setState({name: value});
    },

    onChangeHighCost: function (value) {
      this.setState({highCost: value});
    },

    onChangeLowCost: function (value) {
      this.setState({lowCost: value});
    },

    updateButton: function () {
      this.setState({rowStyle: true});
    },

    updateFormData: function () {
      this.setState({rowStyle: false});
    },

    render: function () {
        return (
          <section className="col-md-9 col-md-offset-1">
                <div>
                  <InputLabel rowStyle={this.state.rowStyle}  onClick={this.updateButton} name= {this.state.name} highCost= {this.state.highCost} lowCost = {this.state.lowCost} />
                  <InputForm onSubmitFormData={this.updateFormData} handleUpdateName= {this.onChangeName} handleUpdateHighCost={this.onChangeHighCost} handleUpdateLowCost={this.onChangeLowCost} rowStyle={this.state.rowStyle} name= {this.state.name} highCost= {this.state.highCost} lowCost = {this.state.lowCost} />
                </div>
          </section>
        );
    }
});

module.exports = CostItem;
