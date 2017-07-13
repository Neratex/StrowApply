'use strict';

import * as _ from 'lodash';

// @flow
class _Application {
  name: string = '';
  age: string = '';
  about: string = '';
  times: string = '';
  why: string = '';
  whyyou: string = '';
}

export function ApplicationService($location, $http, $q, Util, User) {
  'ngInject';

  var safeCb = Util.safeCb;
  var currentApplication: _Application = new _Application();

  var Application = {
    send({
      name,
      age,
      about,
      times,
      why,
      whyyou
    }, callback ? : Function) {
      return $http.post('/application/local', {
        name,
        age,
        about,
        times,
        why,
        whyyou
      })
        .then(user => {
          safeCb(callback)(null, user);
          return user;
        })
        .catch(err => {
          Auth.logout();
          safeCb(callback)(err.data);
          return $q.reject(err.data);
        });
    },
    createUser(user, callback ? : Function) {
      return User.save(user, function(data) {
        currentApplication = Application.get();
        return safeCb(callback)(null, user);
      }, function(err) {
        Auth.logout();
        return safeCb(callback)(err);
      })
        .$promise;
    }
  };

  return Application;
}
