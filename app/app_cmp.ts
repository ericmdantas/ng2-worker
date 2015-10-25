/// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/web_worker/worker';
import {TodoCmp} from 'app/todo/todo_cmp.js';

@Component({
  selector: 'app-cmp',
  template: `
    <todo-cmp></todo-cmp>
  `,
  directives: [TodoCmp]
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app-cmp init');
  }
}
