'use strict';

import angular from 'angular';
import routes from './builder.routes';
import BuilderController from './builder.controller';

export default angular.module('strowApplyApp.builder', ['ui.router'])
  .config(routes)
  .controller('BuilderController', BuilderController)
  .name;
