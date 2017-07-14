'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './developer.routes';

export class DeveloperComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('strowApplyApp.developer', [uiRouter])
  .config(routes)
  .component('developer', {
    template: require('./developer.html'),
    controller: DeveloperComponent,
    controllerAs: 'developerCtrl'
  })
  .name;
