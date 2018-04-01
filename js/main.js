require(
    [],
    function() {
        'use strict';

        const examples = {};

        window.runExample = function(example) {
            examples[example].init();
        };
    }
);
