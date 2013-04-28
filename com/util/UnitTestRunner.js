var fs = require('fs')
  	, nodeunit = require('nodeunit')
	, klass = require("klass");

module.exports = klass({
	
	run: function( dir ) {

		// run all tests
		var files = fs.readdirSync( dir );
		for(var i in files) {
			try { 
		  		nodeunit.reporters.default.run( [ dir + files[i] ] );
			} catch ( e ) {
				// skip		
			}
		}
		
	}
})