import passport from 'passport';
import {
  Strategy as LocalStrategy
} from 'passport-local';

export function setup(User /*, config*/ ) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  }, function(email, password, done) {
    return localApplication(User, email, password, done);
  }));
}
