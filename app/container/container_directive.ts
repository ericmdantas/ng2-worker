/// <reference path="../../typings/tsd.d.ts" />

import {
  Directive,
  OnInit,
  Inject,
  ElementRef
} from 'angular2/web_worker/worker';

import {TodoCmp} from 'app/todo/todo_cmp.js';

@Directive({
  selector: '[container-directive]',
  host: {
    'class': 'container'
  }
})
export class ContainerDirective implements OnInit {
  constructor(@Inject(ElementRef) public el: ElementRef) {

  }

  onInit() {
    console.log('container-directive init');
  }

}
