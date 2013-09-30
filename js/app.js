define( ["marionette", "todosCollection", "todosView"],
    function (Marionette, TodoCollection, TodosView) {
    "use strict";

    // set up the app instance
    var ExampleApp = new Marionette.Application();

    // configuration, setting up regions, etc ...
    ExampleApp.addRegions({
        main: '#main-container'
    });

    ExampleApp.addInitializer(function(){
        //create a new instance of a Backfire Collection
        var collection = new TodoCollection();

        //
        ExampleApp.main.show(new TodosView({collection: collection}));
    });

    return ExampleApp;
});