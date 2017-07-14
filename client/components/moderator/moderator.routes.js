'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('moderator', {
      url: '/moderator',
      template: '<moderator></moderator>'
    });
}
