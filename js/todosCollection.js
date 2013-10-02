define(['backbone', 'backfire'], function(Backbone, Backfire){
    "use strict";

    var TodoModel = Backbone.Model.extend({

    });

    return Backbone.Firebase.Collection.extend({
        model: TodoModel,

        firebase: "https://marionette-demo.firebaseio-demo.com/Todos"
    });
});
