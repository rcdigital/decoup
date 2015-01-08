'use strict';
var React = require('react');
var CostsMixin = function () {
    return {

      componentWillMount: function () {
          this.setState({rowStyle : false});
          if (this.props.name === '' ) {
            this.setState({rowStyle : true});
          }
      },

      propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        highCost: React.PropTypes.number,
        lowCost: React.PropTypes.number
      },

      getDefaultProps: function () {
        return {
          id:'',
          name: '',
          highCost: '',
          lowCost: ''
        };
      }
  };

};

module.exports = CostsMixin;
