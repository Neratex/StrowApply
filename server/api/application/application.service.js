'use strict';
import config from './config/environment';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import compose from 'composable-middleware';
import * as Application from './application.model';

var validateJwt = expressJwt({
  secret: config.secrets.session
});
