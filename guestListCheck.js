var guestList = ["John", "Jane", "Joe", "Jack"]

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!");
} else {
    alert("Sorry, You are not on the list");
}