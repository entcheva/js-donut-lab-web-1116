//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var guests = parseInt(prompt("How many guests?"));
var donuts = parseInt(prompt("How many donuts?"));

//write a conditional to check if there are enough donuts
//alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

(donuts >= guests) ? alert(`Time to eat the donuts! All ${donuts} donuts.`) : alert(`Aw man, not enough donuts for all ${guests} guests.`)
