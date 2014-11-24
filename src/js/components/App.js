var React = require('react');
var Router = require('react-router-component');
var Home = React.createFactory(require('./Home'));
var CostsList = React.createFactory(require('./costs/CostsList'));
var Template = React.createFactory(require('./Template'));

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function() {
    return (
        <Template>
            <Locations>
                <Location path = "/" handler = {Home} />
                <Location path = "/custos" handler = {CostsList} />
            </Locations>
        </Template>
    );
  }

});

module.exports = App;
