'use strict';

import mongoose, {Schema} from 'mongoose';
import {registerEvents} from './description.events';

var DescSchema =  new Schema({
  description: String
});

DescSchema.virtual('description').get(function() {
  return {
    desc = this.description;
  };
});

DescSchema.methods = {
  getDescriptionFromHomepage() {
    return this.description;
  }
}

registerEvents(DescSchema);
export default mongoose.model('Description', DescSchema);
