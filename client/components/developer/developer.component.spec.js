'use strict';

describe('Component: DeveloperComponent', function() {
  // load the controller's module
  beforeEach(module('strowApplyApp.developer'));

  var DeveloperComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DeveloperComponent = $componentController('developer', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
