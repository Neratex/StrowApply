'use strict';
import express from 'express';
import * as Application from './application.model';

// Passport Configuration
require('./local/passport').setup(Application);

var router = express.Router();

router.use('/local', require('./local').default);

export default router;
