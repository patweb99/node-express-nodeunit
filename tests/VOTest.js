var http = require('http')
	, VO = require('../com/vo/VO')
	, querystring = require('querystring');

module.exports = {
	
	setUp: function (callback) {
        this.vo = new VO( { foo:'bar', bar:'foo' } );
        callback();
    },
    
    // tests to make sure the argument object is properly sent in to the object
    // then ensures that the value can be seen
    initArgsTest: function ( test ) {
    	
        if ( this.vo.get('foo') == 'bar' ) { 
    		test.ok( true, "Success" );
        	test.done();
        }
        
    },
    
    // tests the global get functionality
    getTest: function ( test ) {
    	
        if ( this.vo.get('foo') == 'bar' ) { 
    		test.ok( true, "Success" );
        	test.done();
        }
        
    },
    
    // tests the global set functionality
    setTest: function ( test ) {
    	
    	// set a variable
    	this.vo.set('check','mate');
    	// check to see if the variable exists within the vo
        if ( this.vo.get('check') == 'mate' ) { 
    		test.ok( true, "Success" );
        	test.done();
        }
        
    },
    
    // tests to make sure an object is returned when asked
    toObjectTest: function ( test ) {
    
    	if ( typeof this.vo.toObject() == 'object' && this.vo.toObject().foo == 'bar' ) {
    		test.ok( true, "Success" );
    		test.done();
    	}
    	
    },
    
    tearDown: function (callback) {
        callback();
    }
} 