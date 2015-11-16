// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.3.min',
        picturefill: 'picturefill'
    },
    map:{
        '*': {
            conditioner:'conditioner'
        }
    }
});

// all modules should be loaded by the conditioner
require(['conditioner'],function(conditioner) {
    conditioner.init();
});