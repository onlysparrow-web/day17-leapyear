let reminder, nextLeapYear;
checkYear = parseInt(prompt("Enter the year you want to check"));
function leapCheck(checkYear) {
  reminder = checkYear % 4;
  if (checkYear % 4 == 0) {
    output = "The given year is a leap year";
  } else {
    output = "The given year is not a leapYear";

    nextLeapYear = checkYear - reminder + 4;
    output = "The next closed leapYear is: " + nextLeapYear;
  }
  return output;
}
var x = leapCheck(checkYear);
console.log(output);
