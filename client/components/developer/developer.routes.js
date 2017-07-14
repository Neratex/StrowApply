'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('developer', {
      url: '/developer',
      template: '<developer></developer>'
    });
}
