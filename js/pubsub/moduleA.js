define(function(require, factory) {
    'use strict';

    const pubSub = require('pubsub/pubsub');
    let subscription;

    subscription = pubSub.subscribe('atopic', function (data) {
       console.log('alopic was published with data', data);
       subscription.dispose();
    });
    
});
