// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var prefix2 = cardNumber.slice(0, 2);
  var prefix3 = cardNumber.slice(0, 3);
  var prefix4 = cardNumber.slice(0, 4);
  var cardLength = cardNumber.length;

  if ((prefix2 === '38' || prefix2 === '39') && cardLength === 14) {
  	return "Diner's Club";
  } else if ((prefix2 === '34' || prefix2 === '37') && cardLength === 15) {
  	return 'American Express';
  } else if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') && (cardLength >= 12 && cardLength <= 19)) {
  	return 'Maestro';	
  } else if ((prefix2 === '49' || prefix2 === '56' || prefix2 === '63' || prefix2 === '67') &&  (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
	return 'Switch';
  } else if (cardNumber.startsWith('4') && cardNumber.charAt(2) !== '9' && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
  	return 'Visa';
  } else if ((prefix2 === '51' || prefix2 === '52' || prefix2 === '53' || prefix2 === '54' || prefix2 === '55') && cardLength === 16) {
  	return 'MasterCard';
  } else if ((prefix4 === '6011' || prefix3 === '644' || prefix3 === '645' || prefix3 === '646' || prefix3 === '647' || prefix3 === '648' || prefix3 === '649' || prefix2 === '65') && (cardLength === 16 || cardLength === 19)) {
  	return 'Discover';
  } else if (prefix3 === '622' || prefix2 === '62' && (cardLength >= 16 && cardLength <= 19)) {
 	return 'China UnionPay';
  } else {
  	return 'Card not found';
  }
};


