(function (Backbone, _, $) {

  Backbone.Collection.prototype.addWithNeighbors = function (model, options) {

    if (!_.isUndefined(options) && !_.isUndefined(options.at)) {
      model.set({
        nextNeighbor: this.models[options.at],
        previousNeighbor: this.models[options.at -1]
      });
    } else {
      model.set({
        previousNeighbor: _.last(this.models),
        nextNeighbor: {}
      });
    }

    this.add(model, options);
  };

})(Backbone, _, jQuery);