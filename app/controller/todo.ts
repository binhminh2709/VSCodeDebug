interface ItodoController {
    todos:TodoElement[];
    newTodoText:string;

    // remaining():number;
    // archive():void;
    // addTodo():void;
}

class TodoElement {
    text: string;
    done:boolean;
}

class todoController implements ItodoController{
    todos:TodoElement[];
    newTodoText:string
    
    constructor(){
        console.log("nguyen dinh minh");
        this.todos=[
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];
    }

    addTodo(){
        this.todos.push({text:this.newTodoText, done:false});
    }

    
    
    remaining():number{
        let count:number=0;

        this.todos.forEach(elementToDo => {
            count+=elementToDo.done?0:1;
        });
        return count;
    }
    
    archive():void{
        let oldToDos:TodoElement[];
        oldToDos=this.todos;
        this.todos=[];
        
        oldToDos.forEach(elementToDo => {
            if(!elementToDo.done){
                this.todos.push(elementToDo);
            }
        });
    }
}
angular.module("basicDemo").controller("TodoListController",todoController )
