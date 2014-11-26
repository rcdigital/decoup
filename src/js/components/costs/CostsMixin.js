'use strict';
var React = require('react');
var CostsMixin = {
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

module.exports = CostsMixin;
