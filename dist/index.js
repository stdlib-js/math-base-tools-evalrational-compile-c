/** @license Apache-2.0 */

'use strict';

/**
* Compile a C function for evaluating a rational function.
*
* @module @stdlib/math-base-tools-evalrational-compile-c
*
* @example
* var compile = require( '@stdlib/math-base-tools-evalrational-compile-c' );
*
* var P = [ -6.0, -5.0 ];
* var Q = [ 3.0, 0.5 ];
*
* var str = compile( P, Q ); // ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 )
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
