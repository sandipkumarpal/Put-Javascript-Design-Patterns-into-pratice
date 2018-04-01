define(function(require) {
    'use strict';
    return {
        init: function() {
            let moduleA = require('pubsub/moduleA');
            let moduleB = require('pubsub/moduleB');

            moduleB.publishEvent();
            moduleB.publishEvent();
        }
    }
});