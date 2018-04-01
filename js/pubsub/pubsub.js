define(function(require, factory) {
    'use strict';

    let subscribers = {};

    return {
        publish: function(topic, data) {
            if (!subscribers[topic]) {
                return;
            }

            subscribers[topic].forEach(subscriber => {
                subscriber(data);
            });
        },
        subscribe : function(topic, callBack) {
            let index;
            if (!subscribers[topic]) {
                subscribers[topic] = [];
            }

            index = subscribers[topic].push(callBack) -1;

            return {
                dispose: function() {
                    subscribers[topic].splice(index, 1);
                }
            }
        }
    };
});
