'use strict';

import {
  Router
} from 'express';
import * as controller from './application.controller';

var router = new Router();

router.get("/:username", controller.username);

module.exports = router;
