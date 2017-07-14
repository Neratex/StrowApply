'use strict';

import {
  EventEmitter
} from 'events';
var DescriptionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DescriptionEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(User) {
  for (var e in events) {
    let event = events[e];
    User.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DescriptionEvents.emit(`${event}:${doc._id}`, doc);
    DescriptionEvents.emit(event, doc);
  };
}

export {
  registerEvents
};
export default DescriptionEvents;
