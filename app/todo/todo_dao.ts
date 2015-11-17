import {Observable} from 'angular2/web_worker/worker';
import {Todo} from 'app/todo/todo_model.js';

export class TodoDAO {
  add(todo: Todo):Observable {
	return Observable.create((o) => {
		o.next(todo);
	});
  }

  remove(id: string | number):Observable {
	return Observable.create((o) => {
		o.next(id);
	});
  }
}
