'use strict';

describe('Component: ModeratorComponent', function() {
  // load the controller's module
  beforeEach(module('strowApplyApp.moderator'));

  var ModeratorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ModeratorComponent = $componentController('moderator', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
