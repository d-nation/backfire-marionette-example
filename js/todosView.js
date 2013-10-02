define(['marionette'],
    function (Marionette) {
    "use strict";

    var TodoItemView = Marionette.ItemView.extend({
        tagName: "li",

        template: "#template-todoItemView",

        events: {
            "click .todo-done": "onDoneClick"
        },

        onDoneClick: function(){
            this.model.collection.remove(this.model);
        }
    });

    return Marionette.CompositeView.extend({
        itemView: TodoItemView,

        itemViewContainer: "#todo-list",

        template: "#template-todoListCompositeView",

        ui: {
            newTodoInput: "#new-todo"
        },

        events: {
            "click #todo-submit": "onSubmitClick"
        },

        initialize: function(){
            this.collection.on("change", this.render);
        },

        onSubmitClick: function(){
            var newTodo = this.ui.newTodoInput.val();

            this.collection.add({name: newTodo});

            this.ui.newTodoInput.val("");
        }
    });
});
