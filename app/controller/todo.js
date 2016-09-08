var TodoElement = (function () {
    function TodoElement() {
    }
    return TodoElement;
}());
var todoController = (function () {
    function todoController() {
        this.todos = [
            { text: 'learn angular', done: true },
            { text: 'build an angular app', done: false }];
    }
    todoController.prototype.addTodo = function () {
        this.todos.push({ text: this.newTodoText, done: false });
    };
    todoController.prototype.remaining = function () {
        var count = 0;
        this.todos.forEach(function (elementToDo) {
            count += elementToDo.done ? 0 : 1;
        });
        return count;
    };
    todoController.prototype.archive = function () {
        var _this = this;
        var oldToDos;
        oldToDos = this.todos;
        this.todos = [];
        oldToDos.forEach(function (elementToDo) {
            if (!elementToDo.done) {
                _this.todos.push(elementToDo);
            }
        });
    };
    return todoController;
}());
angular.module("basicDemo").controller("TodoListController", todoController);
//# sourceMappingURL=todo.js.map