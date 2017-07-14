'use strict';

import {
  Router
} from 'express';
import * as controller from './description.controller';

var router = new Router();

router.get('/', controller.description);

module.exports = router;
