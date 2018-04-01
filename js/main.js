require([
    'factory/init',
    'pubsub/init',
    'strategy/init'],
    function(factory, pubsub, strategy) {
        'use strict';

        const examples = {
            factory,
            pubsub,
            strategy
        };

        window.runExample = function(example) {
            examples[example].init();
        };
    }
);
