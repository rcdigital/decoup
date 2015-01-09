'use strict';
var Appbase = require('../Appbase');
var Q = require('q');



var getEdges = function (nameSpace, vertex) {
    var deferred = Q.defer();
    var findRef = Appbase.ns(nameSpace).v(vertex);
    var waiting = 0;
    var allEdgesRecieved = false;
    var listEdges = [];

    var edgesCallback = function(error, eRef, eSnap) {
        waiting += 1;

        eRef.once('properties', function(error, ref, vSnapshot) {
            var item = [];
            item = vSnapshot.properties();
            item.id = ref.name();
            listEdges.push(item);
            waiting -= 1;
            console.log(waiting);

            if (waiting === 0) {
                console.log('wid');
                deferred.resolve(listEdges);
                allEdgesRecieved = true;
                return deferred.promise;
            }
        });


    };

    findRef.on('edge_added', edgesCallback);

};



console.log(getEdges);


 Q.fcall(getEdges('companies', 'rccom/rccomAreas')).then(function (res) { console.log(res); });

var Find = {
  getEdges: getEdges
};

module.exports = Find;
