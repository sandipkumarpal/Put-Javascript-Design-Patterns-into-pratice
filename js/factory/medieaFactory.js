define(function(require) {
    'use strict';
    const media = {
        Video : require('factory/video'),
        Image : require('factory/image')
        
    };
    return {
        createMedia: function(type, attributes) {
            const MediaType = media[type];

            return new MediaType(attributes);
        }
    }
});