function isSameType(value1, value2) {
  //your js code here
	let valueone = parseFloat(value1);
	let valuetwo = parseFloat(value2);
	if(!isNaN(valueone)&& !isNaN(valuetwo)){
	return typeof(valueone)===typeof(valuetwo)
	}
	return typeof(value1)===typeof(value2)
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
