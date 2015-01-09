'use strict';
var Appbase = require('../Appbase');
var Q = require('q');


var getEdges = function (nameSpace, vertex) {
    var deferred = Q.defer();
    var findRef = Appbase.ns(nameSpace).v(vertex);
    var waiting = 0;
    var listEdges = [];

    var edgesCallback = function(error, eRef, eSnap) {
        waiting += 1;

        eRef.once('properties', function(error, ref, vSnapshot) {
            var item = [];
            item = vSnapshot.properties();
            item.id = ref.name();
            listEdges.push(item);
            waiting -= 1;
            if (waiting === 0) {
                console.log('wid');
                deferred.resolve(listEdges);
            }
        });
    };
    console.log('teste');
    findRef.on('edge_added', edgesCallback);
    return deferred.promise;
};

var getAreas = function (ns, vertex) {
  getEdges(ns, vertex);
  console.log('getAreas');
  return listEdges;
};

getAreas('companies', 'rccom/rccomAreas');

var Find = {
  getEdges: getEdges
};

module.exports = Find;
