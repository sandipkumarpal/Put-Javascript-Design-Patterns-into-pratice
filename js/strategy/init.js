define(function(require, factory) {
    'use strict';
    return {
        init: function() {
            let Strategy = require('strategy/strategy');
            let telValidator = require('strategy/telValidator');
            let emailValidator = require('strategy/emailValidator');
            
            
            let validator = new Strategy();

            console.log(validator.selectValidator(telValidator).validate(12345678901));
            console.log(validator.selectValidator(emailValidator).validate('test'));
        }
    }
});