// Business Logic


// UI Logic
$(document).ready(function() {
  $('form#romannumeral').submit(function(event) {
    event.preventDefault();

    const userInput = numberToRoman($("input#numberInput").val());

    $('#result').text(userInput);
  });
});


// ("1=I", "5=V", "10=X, "50=L", "100=C", "500=D", "1000=M" )
//  arabic->roman
// if number > 3999 = nay
// if number < 1 = nay
// if not a number = nay
// Seperate ones, tens, hundreds, and thousands, so 99 is XCIX not IC
// {'1=I','2=II','3=III','4=IV','5=V','6=VI','7=VII','8=VIII','9=IX','10=X','40=XL','L=50','100=C','400=CD','500=D','1000=M'}
// 

function numberToRoman(number) {
  if (number>3999) {
  return "no"   
  } else if (number<1) {
  return 'no'
  } else if (number=1) {
  return "I"
  } else if (number=2) {
  }
}
