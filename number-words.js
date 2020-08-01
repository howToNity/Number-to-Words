function numberToWords(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

    var numString = num.toString();

    console.log('Number: ' + num)

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  if (numString.length == 3) {
  if (numString[1] === '0' && numString[2] === '0')
    return ones[numString[0]] + ' hundred';
  else
    return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
}

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
    return ones[numString[0]] + ' thousand ' + convert(end);
  }
}

function convert(end) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
    var string = end.toString();
    if (string[1] === '0' && string[2] === '0')
        return ones[string[0]] + ' hundred';
    else
        return ones[string[0]] + ' hundred and ' + tens[string[1]] + ' ' + ones[string[2]];
}

console.log(`The number in words is: ${numberToWords(9821)}`)
