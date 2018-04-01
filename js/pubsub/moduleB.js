define(function(require, factory) {
    'use strict';

    const pubSub = require('pubsub/pubsub');

    return {
        publishEvent: function () {
            const data = {
                something: 'some data'
            };

            pubSub.publish('atopic', data);
        }
    }
    
});
