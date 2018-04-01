require(
    ['factory/init'],
    function(factory) {
        'use strict';

        const examples = {
            factory: factory
        };

        window.runExample = function(example) {
            examples[example].init();
        };
    }
);
