/// <reference path="../../typings/tsd.d.ts" />

import {bootstrapWebWorker} from 'angular2/web_worker/worker';
import {AppCmp} from 'app/app_cmp.js';

bootstrapWebWorker(AppCmp);
