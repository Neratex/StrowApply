'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';
import ngCookies from 'angular-cookies';
import {
  applicationInterceptor
} from './interceptor.service';
import {
  routerDecorator
} from './router.decorator';
import {
  ApplicationService
} from './application.service';
import {
  UserResource
} from './user.service';

import uiRouter from 'angular-ui-router';

function addInterceptor($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push('applicationInterceptor');
}

export default angular.module('strowApplyApp.application', [constants, util, ngCookies, uiRouter])
  .factory('ApplicationInterceptor', applicationInterceptor)
  .run(routerDecorator)
  .factory('Application', ApplicationService)
  .factory('User', UserResource)
  .config(['$httpProvider', addInterceptor])
  .name;
