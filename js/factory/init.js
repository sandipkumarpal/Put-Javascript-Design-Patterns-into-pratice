define(function(require) {
    'use strict';
    
    return {
        init: function() {
            let myVideo, myImage;
            let mediaFactory = require('factory/medieaFactory');
        
            myVideo = mediaFactory.createMedia('Video', {
                length: 3.5,
                name: "My Video"
            });
        
            myImage = mediaFactory.createMedia('Image', {
                width: 100,
                height: 100,
                name: "My Image"
            });
            console.log(myVideo);
            console.log(myImage);
        }
    }
    
});
