define(function(require, factory) {
    'use strict';
    return {
        init: function () {
            let subject, observer, otherObserver, data, moreData;
            let Subject = require('observers/subject');
            let Observer = require('observers/observer');

            subject = new Subject();
            observer = new Observer('observer1');
            otherObserver = new Observer('observer2');

            data = {
                prop : 'somthing'
            };
            moreData = {
                prop : 'something else'
            }

            subject.observer(observer);
            subject.observer(otherObserver);

            subject.add(data);
            subject.add(moreData);
        }
    }
});
