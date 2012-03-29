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

  it("should have an add method on the Collection object", function () {
    expect(employeeCollection.add).toBeTruthy();
  });

  describe('previous method returns item immediatedly before current item', function () {

    it('should have a previous method', function () {
      expect(employeeCollection.previous).toBeTruthy();
    });

    it('should return a result when invoked with an item in the collection', function () {
      var dwight = employeeCollection.models[1],
          expected = employeeCollection.models[0], 
          result = employeeCollection.previous(dwight);

      expect(expected).toEqual(result);
    });

    it('should return undefined when called with the first item in the collection', function () {
      var first = employeeCollection.models[0],
          result = employeeCollection.previous(first);
      expect(result).toBeUndefined();
    });
  });

  describe('next method returns item immediatedly following the current item', function () {
    it('should have a next method', function () {
      expect(employeeCollection.next).toBeTruthy();
    });

    it('should return a result when invoked with an item in the collection', function () {
      var dwight = employeeCollection.models[1],
          expected = employeeCollection.models[2],
          result = employeeCollection.next(dwight);

      expect(expected).toEqual(result);
    });

    it('should return undefined when called with the last item in the collection', function () {
      var last = employeeCollection.models[2],
          result = employeeCollection.next(last);
      expect(result).toBeUndefined();
    });
  });
});