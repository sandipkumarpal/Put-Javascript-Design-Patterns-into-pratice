require([
    'factory/init',
    'pubsub/init',
    'strategy/init',
    'observers/init'],
    function(factory, pubsub, strategy, observer) {
        'use strict';

        const examples = {
            factory,
            pubsub,
            strategy,
            observer
        };

        window.runExample = function(example) {
            examples[example].init();
        };
    }
);
