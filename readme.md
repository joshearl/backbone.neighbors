Backbone.Neighbors is an extension for Backbone.js designed to make it easier to manage adjacent items 
in a collection. It adds `next` and `previous` methods to the collection that return references to the items 
that come before and after the current item.

## Usage

Include the `backbone.neighbors.js` file after Backbone on your page. Call the `next` and `previous` methods, passing
in the current list item:

	var nextItem = myCollection.next(currentModel); 

