'use strict';
var Appbase = require('../Appbase');
var Promise = require('promise');
console.log(Promise);
var FindPromise =  Promise();
console.log(FindPromise);

FindPromise.getEdges = function (nameSpace, vertex) {
    var findRef = Appbase.ns(nameSpace).v(vertex);
    var results = [];
    findRef.on('edge_added', function(error, eRef, eSnap) {
        eRef.once('properties', function(error, ref, vSnapshot) {
          var item = [];
          item = vSnapshot.properties();
          item.id = ref.name();
          results.push(item);
        });
        return results;
    });
};

console.log(FindPromise.getEdges('companies', 'rccom/rccomAreas'));

var Find = {
  getEdges: FindPromise.getEdges
};

module.exports = Find;
