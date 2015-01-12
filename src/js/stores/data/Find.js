'use strict';
var Firebase = require('Firebase');
var ref = new Firebase('https://decoup.firebaseio.com/');
var companiesRef = ref.child('companies');

var searchCompany = ref.child('rccom').set({
  areas:{
    development: {
        name: 'Development',
        lowCost: 4,
        highCost: 8
    },
    design: {
        name: 'Design',
        lowCost: 4,
        highCost: 8
    }
  }
});

var getEdges = function (nameSpace, vertex) {
    var waiting = 0;
    var listEdges = [];
};

var getAreas = function (ns, vertex) {
  getEdges(ns, vertex);
  console.log('getAreas');
};

getAreas('companies', 'rccom/rccomAreas');

var Find = {
  getEdges: getEdges
};

module.exports = Find;
