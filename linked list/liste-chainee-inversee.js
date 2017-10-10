var obj = {val: 12, next: {val: 14, next: {val: 5, next: {val: 3, next: null}}}};

console.log(obj);
console.log('reverse');
var reverseResult = reverse(obj);
console.log(reverseResult);

var base = document.getElementById('base');
var result = document.getElementById('result');
base.textContent = JSON.stringify(obj);
result.textContent = JSON.stringify(reverseResult);


function reverse(obj) {
	var reverse = {val: obj.val, next: null};
	do {
		obj = obj.next;
		reverse = {val: obj.val, next:reverse};
	} while (obj.next != null)
	
	return reverse;
}
