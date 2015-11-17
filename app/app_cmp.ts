import {Component, OnInit} from 'angular2/web_worker/worker';

import {TodoCmp} from 'app/todo/todo_cmp.js';
import {TodoListCmp} from 'app/todo/todo_list_cmp.js';

@Component({
  selector: 'app-cmp',
  templateUrl: 'app/app.html',
  directives: [TodoCmp/*, TodoListCmp*/]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app-cmp init');
  }
}
