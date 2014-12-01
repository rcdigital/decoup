'use strict';
var React = require('react');
var rowStyle = '';
var CostsMixin = {
    getInitialState: function () {
      return { rowStyle: ''}
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
    },

    componentWillMount: function () {
        this.setState({rowStyle : ''});
        if (this.props.area.name !== '' ) {
          this.setState({rowStyle : 'js-hidden'});
        }
    }
};

module.exports = CostsMixin;
