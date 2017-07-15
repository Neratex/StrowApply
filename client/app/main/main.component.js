import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  desc = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('description');
      socket.unsyncUpdates('application');
    });
  }

  $onInit() {
    this.$http.get('/api/description').then(r => {
      this.desc = r.desc;
      this.socket.syncUpdates('description', this.desc);
      this.socket.syncUpdates('application', null);
    });
  }

  /*addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }*/
}

export default angular.module('strowApplyApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
