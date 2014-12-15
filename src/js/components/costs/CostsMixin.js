'use strict';
var React = require('react');
var CostsMixin = function () {
    return {

      componentWillMount: function () {
          this.setState({rowStyle : false});
          if (this.props.area.name === '' ) {
            this.setState({rowStyle : true});
          }
      },

      propTypes: {
        name: React.PropTypes.string,
        highCost: React.PropTypes.number,
        lowCost: React.PropTypes.number
      },

      getDefaultProps: function () {
        return {
          area: {
            name: '',
            highCost: '',
            lowCost: ''
          }
        };
      }

  };

};

module.exports = CostsMixin;
