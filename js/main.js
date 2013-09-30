/*
    This is the require.js configuration
*/

require.config({
    urlArgs: "bust=" + (new Date()).getTime(),

    paths : {
        backbone : 'backbone.marionette/backbone',
        underscore : 'backbone.marionette/underscore',
        jquery : 'backbone.marionette/jquery',
        marionette : 'backbone.marionette/backbone.marionette',
        firebase: 'backbone.firebase/firebase',
        backfire: 'backbone.firebase/backbone-firebase',
        mainApp: 'app'
    },
    shim : {
        jquery : {
            exports : 'jQuery'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        backfire: {
            deps: ['backbone', 'firebase'],
            exports: 'Backbone.Firebase'
        }
    }
});

require(['mainApp', 'backbone'], function(app, Backbone){
    /**
     * This runs once app.js has been loaded.
     */


    app.start();
});