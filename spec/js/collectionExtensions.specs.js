describe("collection extensions", function () {

  var employeeCollection;

  beforeEach(function() {

    Employee = Backbone.Model.extend({
      name: "Default Name"
    });

    EmployeeCollection = Backbone.Collection.extend({
      model: Employee,
      initialize: function () {
        this.add(new Employee( { name: "Jim Halpert"})); 
        this.add(new Employee( { name: "Dwight Schrute"})); 
        this.add(new Employee({ name: "Michael Scott" }));
      },
    });

    employeeCollection = new EmployeeCollection;
  });

  it("should contain several items", function () {
    expect(employeeCollection.models.length).toEqual(3);
  });

  it("should add an addWithNeighbors method to the Collection object", function () {
    expect(employeeCollection.addWithNeighbors).toBeTruthy();
  });

  describe("adding a new model", function () {

    var pam;

    beforeEach(function () {
      pam = new Employee({ name: "Pam Beesly" });
      employeeCollection.addWithNeighbors(pam);
    });

    it("should add the new model to the collection", function () {
      expect(employeeCollection.models.length).toEqual(4);
    });

    it("should set the previousNeighbor propery", function () {
      expect(pam.get("previousNeighbor")).toBeTruthy();
    });

    it("should set the previousNeighbor propery to be the last model in the collection", function () {
      expect(pam.get("previousNeighbor")).toBe(employeeCollection.models[2]);
    });

    it("it should set the nextNeighbor property to an empty object when appending to the end of the collection", function () {
      expect(pam.get("nextNeighbor")).toEqual({});
    });


  });

  describe("inserting a new model", function () {

    var stanley,
        index;

    beforeEach(function () {
      index = 1;
      stanley = new Employee({ name: "Stanley Hudson" });
      employeeCollection.addWithNeighbors(stanley, { at: index });
    });

    it("should add the new model to the collection at the specified index", function () {
      expect(employeeCollection.models[index]).toEqual(stanley);
    });

    it("should set the nextNeighbor property to the next model in the list", function () {
      expect(stanley.get("nextNeighbor")).toBe(employeeCollection.models[index + 1]);
    });

    it("should set the previousNeighbor property to the preceeding model in the list", function () {
      expect(stanley.get("previousNeighbor")).toBe(employeeCollection.models[index - 1]);
    });

  });
});