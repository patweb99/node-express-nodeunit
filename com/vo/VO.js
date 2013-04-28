var klass = require("klass");

module.exports = klass({

  	initialize: function( args ) {
		if ( typeof args === 'object' )
			this.instance = args;
	},  
	set: function( key, value ) {
		this.instance[key] = value;
	},
	get: function( key ) {
		return this.instance[key];
	},
	
	serialize: function () {
		return JSON.stringify( this.instance );
	},
	toObject: function() {
		return this.instance;
	}
	  
}); 