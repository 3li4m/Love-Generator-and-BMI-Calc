// love calculator
// Can be run in web Browser Console
var nameOne = prompt("Person One's Name: ");
var nameTwo = prompt("Person Two's Name: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(randNum) + 1;

if (loveScore > 100){
    alert("Your Love Rating Is " + loveScore + "%" +  " You love eachother like a fat kid loves chocolate");
}
if(loveScore > 30 && loveScore <= 70)
{
    alert("your love score is " + loveScore + "%")
}
else if (loveScore <= 30){
    alert("Your Love Rating Is " + loveScore + "%" +  " You go together like oil and water");
}
//alert("Love rating between " + nameOne + " and " + nameTwo + " is: " + randNum + "%");