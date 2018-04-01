define(function(require, factory) {
    'use strict';
    return {
        validate: function(value) {
            return value.indexOf('@') !== -1;
        }
    }    
});
