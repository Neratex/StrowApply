'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './developer.routes';

export class DeveloperController {
  Apply = {
    name: string,
    old: string,
    email: string,
    you: string,
    times: string,
    whyyou: string,
    examples: string
  };

  apply: Apply = {
    name: '',
    old: '',
    email: '',
    you: '',
    times: '',
    whyyou: '',
    examples: ''
  };
  submitted = false;
  Application;
  $state;

  /* @ngInject */
  constructor(Application, $state) {
    this.Application = Application;
    this.$state = $state;
  }

  sendApplication(form) {
    this.submitted = true;

    if (form.$valid) {
      return this.Application.createApplication({
          name: apply.name,
          old: apply.old,
          email: apply.email,
          you: apply.you,
          times: apply.times,
          whyyou: apply.whyyou,
          examples: apply.examples
        })
        .then(() => {
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}

export class DeveloperComponent {
  /*@ngInject*/
  constructor() {}
}

export default angular.module('strowApplyApp.developer', [uiRouter])
  .config(routes)
  .component('developer', {
    template: require('./developer.html'),
    controller: DeveloperComponent,
    controllerAs: 'developerCtrl'
  })
  .name;
