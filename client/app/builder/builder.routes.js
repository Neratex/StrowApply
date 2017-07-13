'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('builder', {
    url: 'builder',
    template: require('./builder.html')
  });
}
