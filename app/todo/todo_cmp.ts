import {
  Component,
  Inject,
  OnInit,
  FormBuilder,
  Validators,
  ControlGroup,
  FORM_DIRECTIVES,
  NgFor
} from 'angular2/web_worker/worker';

import {TodoDAO} from 'app/todo/todo_dao.js';
import {Todo} from 'app/todo/todo_model.js';

@Component({
  selector: 'todo-cmp',
  templateUrl: 'app/todo/todo.html',
  styleUrls: ['app/todo/todo.css'],
  providers: [TodoDAO],
  directives: [FORM_DIRECTIVES, NgFor]
})
export class TodoCmp implements OnInit {
  todoForm: ControlGroup;
  todoList: Todo[] = [];

  constructor(@Inject(TodoDAO) private _todoDAO: TodoDAO,
              @Inject(FormBuilder) fb: FormBuilder) {

    this.todoForm = fb.group({
      "message": ["", Validators.required]
    });
  }

  onInit() {
    console.log('todo-cmp init');
  }

  addTodo(message: string):void {
    let _todo = new Todo(message);

    this._todoDAO
        .add(_todo)
        .subscribe((t) => {
          this.todoList.push(t);
          this.todoForm.controls.message.updateValue("");
        });
  }

  removeTodo(id: string | number):void {
    this._todoDAO
        .remove(id)
        .subscribe((i) => {
          this.todoList.forEach((t, index) => {
            if (t.createdAt === i) {
              return this.todoList.splice(index, 1);
            }
          })
        });
  }
}
