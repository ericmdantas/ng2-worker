/// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/angular2';

@Component({
  selector: 'app-cmp',
  template: `
    <h2>HELLOOOOOOOOOOOOOOOO</h2>
  `
})
export class AppCmp implements OnInit {
  onInit() {
    console.log('app-cmp init');
  }
}
