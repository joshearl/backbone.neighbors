# Backbone.Neighbors

Backbone.Neighbors is a plugin for Backbone.js designed to make it easier to manage adjacent items 
in a collection. Each model in the collection receives `previousNeighbor` and `nextNeighbor` properties,
which are references to the items that come before and after the current item.

## Usage

## Planned Features
- Rework to put `previousNeighbor` and `nextNeighbor` methods on collection instead of model
- Fix bug: Throws error when initializing collection with an array of models; need to handle `reset` method gracefully
- only set neighbors if { neighbors: true } is passed
- fire event when neighboring items are changed
- update neighbors when sort order is changed
- fix undefined error when setting property on first item in the collection
- getting an error stating that Object doesn't have a `set` method when deleting items from collection; 
	suspect that somehow neighbor properties are getting set to `{}`
