
var tab = [1,3,5,7,9,11,12,14,19,23];

var val = 14; 
var min = 0;
var max = tab.length;
var i = max-parseInt((max - min)/2);
findIndex(val);

function findIndex(val) {
	do {
		if (tab[i] > val) {
			max = i;
			i = max-parseInt((max-min)/2);
			console.log(i);
			console.log(tab[i]);
		}
		if (tab[i] < val) {
			min = i;
			i = max-parseInt((max-min)/2);
			console.log(i);
			console.log(tab[i]);
		}

	} while(tab[i] != val)

	return i;
}