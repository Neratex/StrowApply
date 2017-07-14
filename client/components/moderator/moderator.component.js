'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './moderator.routes';

export class ModeratorComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('strowApplyApp.moderator', [uiRouter])
  .config(routes)
  .component('moderator', {
    template: require('./moderator.html'),
    controller: ModeratorComponent,
    controllerAs: 'moderatorCtrl'
  })
  .name;
