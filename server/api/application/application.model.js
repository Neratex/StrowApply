'use strict';

import mongoose from 'mongoose';
import {
  registerEvents
} from './application.events';

var ApplicationSchema = new mongoose.Schema({
  name: String,
  old: String,
  email: String,
  you: String,
  times: String,
  whyyou: String,
  examples: String
});

registerEvents(ApplicationSchema);
export default mongoose.model('Application', ApplicationSchema);
