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
            var newTodo = this.ui.newTodoInput.val(),
                newId;

            //get the biggest id and add 1
            newId = parseInt(this.collection.at(this.collection.length - 1).get("id")) + 1;

            this.collection.add({id: newId.toString(), name: newTodo});
            this.ui.newTodoInput.val("");
        }
    });
});
