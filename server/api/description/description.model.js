'use strict';

import mongoose from 'mongoose';
import {
  registerEvents
} from './description.events';

var DescriptionSchema = new mongoose.Schema({
  desc: String
});

registerEvents(DescriptionSchema);
export default mongoose.model('Description', DescriptionSchema);
