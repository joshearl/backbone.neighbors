describe("collection extensions", function () {

  var employeeCollection;

  beforeEach(function() {

    Employee = Backbone.Model.extend({
      name: "Default Name"
    });

    EmployeeCollection = Backbone.NeighborlyCollection.extend({
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

  it("should have an add method on the Collection object", function () {
    expect(employeeCollection.add).toBeTruthy();
  });

  describe("appending a new model to the collection", function () {

    var pam
    ,   preceeding;

    beforeEach(function () {
      pam = new Employee({ name: "Pam Beesly" });
      preceeding = _.last(employeeCollection.models);
      employeeCollection.add(pam);
    });

    it("should add the new model to the collection", function () {
      expect(employeeCollection.models.length).toEqual(4);
    });

    it("should set the previousNeighbor propery of the current model", function () {
      expect(pam.get("previousNeighbor")).toBeTruthy();
    });

    it("should set the previousNeighbor propery to be the last model in the collection", function () {
      expect(pam.get("previousNeighbor")).toBe(employeeCollection.models[2]);
    });

    it("it should leave the current item's nextNeighbor property undefined", function () {
      expect(pam.get("nextNeighbor")).toBeUndefined();
    });

    it("it should update the nextNeighbor property of the preceeding item", function () {
      expect(preceeding.get('nextNeighbor')).toBe(pam);
    });

  });

  describe("inserting a new model", function () {

    var stanley,
        index;

    beforeEach(function () {
      index = 1;
      stanley = new Employee({ name: "Stanley Hudson" });
      employeeCollection.add(stanley, { at: index });
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

  describe("removing an existing model", function () {

    var index,
        employee,
        previous,
        next,
        cid;

    beforeEach(function () {
      index = 1;
      employee = employeeCollection.at(index);
      cid = employee.cid;
      previous = employee.get('previousNeighbor');
      next = employee.get('nextNeighbor');
      employeeCollection.remove(employee);
    });

    it("should remove the model from the collection", function () {
      expect(employeeCollection.getByCid(cid)).toBeUndefined();
    });

    it("should update the nextNeighbor attribute of the preceeding item", function () {
      expect(previous.get('nextNeighbor')).toBe(next);
    });

    it("should update the previousNeighbor attribute of the next item", function () {
      expect(next.get('previousNeighbor')).toBe(previous);
    });

  });

  describe('destroying an existing model', function () {
    // it should update the next and previous neighbors when a collection item is destroyed

  });

});