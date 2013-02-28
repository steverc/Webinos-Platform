(function () {
    "use strict";

    var subfeatureTable = init();

    function init() {
        var subfeatureTable = new Array();
        subfeatureTable['http://webinos.org/api/sensors'] = new Array();
        subfeatureTable['http://webinos.org/api/sensors']['addEventListener'] = ['http://webinos.org/api/sensors/read'];
        subfeatureTable['http://webinos.org/api/sensors']['removeEventListener'] = ['http://webinos.org/api/sensors/read'];
        subfeatureTable['http://webinos.org/api/sensors/temperature'] = new Array();
        subfeatureTable['http://webinos.org/api/sensors/temperature']['addEventListener'] = ['http://webinos.org/api/sensors/read', 'http://webinos.org/api/sensors/temperature/read'];
        subfeatureTable['http://webinos.org/api/sensors/temperature']['removeEventListener'] = ['http://webinos.org/api/sensors/read'];
        return subfeatureTable;
    }

    exports.getFeatureData = function(method) {
        console.log('getFeatureData - method is '+method);
        var result = {};
        var apiFeatureID, apiFeature, apiFeaturesMap = {'ServiceDiscovery':'http://webinos.org/api/discovery'};
        var functionCalled;
        var subFeatures = null;
        var params = null;

        var idx = method.lastIndexOf('@');
        if (idx == -1) {
            idx = method.lastIndexOf('.');
            apiFeatureID = method.substring(0, idx);
            apiFeature = apiFeaturesMap[apiFeatureID];
            functionCalled = method.substring(idx+1);
        } else {
            apiFeature = method.substring(0, idx);
            idx = method.lastIndexOf('.');
            functionCalled = method.substring(idx+1);
        }
        console.log('getFeatureData - function is '+functionCalled);
        if(apiFeature != null) {
            subFeatures = new Array();
            try {
                if(subfeatureTable[apiFeature] && subfeatureTable[apiFeature][functionCalled]) {
                    subFeatures = subfeatureTable[apiFeature][functionCalled];
                }
                console.log('getFeatureData - subfeature are '+subFeatures);
            }
            catch(e) {
                console.log('getFeatureData - error '+e.message);
            }
        }
        result.apiFeature = apiFeature;
        result.subFeatures = subFeatures;
        result.params = params;
        return result;
    };

}());
