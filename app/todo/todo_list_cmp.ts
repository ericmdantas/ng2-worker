import {Component, OnInit} from 'angular2/web_worker/worker';

@Component({
  selector: 'todo-list-cmp',
  templateUrl: 'app/todo/todo_list.html', 
  styleUrls: ['app/todo/todo.css'],

})
export class TodoListCmp implements OnInit {
  onInit() {
    console.log('todo-list init');
  }
}
