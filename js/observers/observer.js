define(function(require, factory) {
    'use strict';
    
    const Observer = function(name) {
        this.name = name;
    }

    Observer.prototype.notify = function(event, data) {
        console.log('This event was ' + event + ' The data was ' + data + ' and I am ', this.name);
    }

    return Observer;

});
