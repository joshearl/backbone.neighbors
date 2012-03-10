describe("test runner setup", function () {

  it("should load Underscore and jQuery and Backbone", function () {
    expect(_ && $ && Backbone).toBeTruthy();
  });

});