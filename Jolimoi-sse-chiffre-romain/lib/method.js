
exports.AtoR = ( nb ) => {

var A = [100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var	R = ["C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
var	Alength = A.length;

var x = parseInt( nb, 10 ) || 1,
 str = "";

if ( x < 1 ){
	x = 1;
} else if ( x > 100 ){
	x = 100;
}
 
for ( var i = 0; i < Alength; ++i ){
	while ( x >= A[ i ] ){
		x -= A[ i ];
		str += R[ i ];
	}
 
	if ( x == 0 ){
		break;
	}
}
	return str;
}
 

 