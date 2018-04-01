define(function(require, factory) {
    'use strict';
    
    let Validator = function() {};

    Validator.prototype.selectValidator = function(validator) {
        this.validator = validator;

        return this;
    };

    Validator.prototype.validate = function(value) {
        if (this.validator) {
            return this.validator.validate(value);
        }
        throw('No validator selected');
    }

    return Validator;

});
