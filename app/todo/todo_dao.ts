/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/web_worker/worker';
import {Todo} from 'app/todo/todo_model.js';

export class TodoDAO {
  add(todo: Todo) {
    let _ee: EventEmitter = new EventEmitter();

    setTimeout(() => _ee.next(todo))

    return _ee.toRx();
  }

  remove(id: string | number) {
    let _ee: EventEmitter = new EventEmitter();

    setTimeout(() => _ee.next(id));

    return _ee.toRx();
  }
}
