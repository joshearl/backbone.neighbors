# Backbone.Neighbors

Backbone.Neighbors is an extension for Backbone.js designed to make it easier to manage adjacent items 
in a collection. It adds `next` and `previous` methods to the collection that return references to the items 
that come before and after the current item.

## Usage

Include the `backbone.neighbors.js` file after Backbone on your page. Call the `next` and `previous` methods with
the current list item:

	var nextItem = myCollection.next(currentModel); 

## Planned Features
- Fix bug: Throws error when initializing collection with an array of models; need to handle `reset` method gracefully
- only set neighbors if { neighbors: true } is passed
- fire event when neighboring items are changed
- update neighbors when sort order is changed
- fix undefined error when setting property on first item in the collection
- getting an error stating that Object doesn't have a `set` method when deleting items from collection; 
	suspect that somehow neighbor properties are getting set to `{}`
