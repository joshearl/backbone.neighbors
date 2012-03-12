# Backbone.Neighbors

Backbone.Neighbors is a plugin for Backbone.js designed to make it easier to manage adjacent items 
in a collection. Each model in the collection receives `previousNeighbor` and `nextNeighbor` properties,
which are references to the items that come before and after the current item.

## Usage

## Planned Features
- only set neighbors if { neighbors: true } is passed
- recalculate neighbors whenever an item is added or removed from the collection
- support `Collection.remove`, `Model.destroy`
