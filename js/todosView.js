define(['marionette'],
    function (Marionette) {
    "use strict";

    var TodoItemView = Marionette.ItemView.extend({
        tagName: "li",

        template: "#template-todoItemView"
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

        onSubmitClick: function(){
            var newTodo = this.ui.newTodoInput.val();

            this.collection.add({name: newTodo});

            this.ui.newTodoInput.val("");
        }
    });
});
