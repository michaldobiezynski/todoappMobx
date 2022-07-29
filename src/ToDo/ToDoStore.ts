import { action, configure, observable } from 'mobx';
import ToDoModel from './ToDoModel';

configure({ enforceActions: 'always' });

export default class ToDoStore {
    @observable
    ToDos: ToDoModel[] = [];

    private todoAPI = 'https://jsonplaceholder.typicode.com/users/1/todos';

    @action.bound
    async init() {
        let response = await fetch(this.todoAPI);
        let newToDos: ToDoModel[] = await response.json();
        console.log("newToDos", newToDos)
        this.addToDoToStore(newToDos);
    }

    @action.bound
    addToDoToStore(ToDos: ToDoModel[]) {
        this.ToDos.length = 0;
        for (let todo of ToDos) {
            this.ToDos.push(todo);
        }
        console.log("this.ToDos", this.ToDos)
    }

    @action.bound
    getToDos() {
        return this.ToDos;
    }

    @action.bound
    async addToDo(title: string, completed: boolean) {
        // let response = await fetch(this.todoAPI, {
        //     method: 'Post',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({ title, isCompleted }),
        // });
        // let createdToDo = await response.json();
        this.addNewToDoToStore({ id: Math.floor(Math.random() * 10) + 1, title, completed });
    }

    @action.bound
    async addNewToDoToStore(todo: ToDoModel) {
        console.log("I go here", todo)
        console.log("bla bla", this.ToDos)
        this.ToDos.push(todo);
    }
}