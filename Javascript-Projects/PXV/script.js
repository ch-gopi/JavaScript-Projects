document.write(1);
document.write('<br>');  /// this is just a line break
document.write(1.5);
document.write('<br>');	/// this is just a line break
///Strings
document.write('Hello');
document.write('<br>');	/// this is just a line break
document.write("Hello");
document.write('<br>');	/// this is just a line break

///Variables
var myHolder = 6;
document.write(myHolder );
document.write('<br>');	/// this is just a line break
var myText = "hello";
document.write(myText);
document.write('<br>');	/// this is just a line break

///Expressions
document.write(myHolder + myHolder );
document.write('<br>');	/// this is just a line break
document.write(myHolder * myHolder );
document.write('<br>');	/// this is just a line break
document.write(myText + ' ' + myText + ' ' + myHolder);
document.write('<br>');	/// this is just a line break

/*
*********
Typically for JavaScript when we combine words we should keep the first letter lowercase of the first word and then uppercase for the second.

newWord
firstName
lastName

Don't use numbers as the first character, also remember its case sensitive.
*********
*/
///Numbers
document.write(1);
document.write('<br>');  /// this is just a line break
document.write(1.5);
document.write('<br>');	/// this is just a line break
///Strings
document.write('Hello');
document.write('<br>');	/// this is just a line break
document.write("Hello");
document.write('<br>');	/// this is just a line break

///Variables
var myHolder = 6;
document.write(myHolder );
document.write('<br>');	/// this is just a line break
var myText = "hello";
document.write(myText);
document.write('<br>');	/// this is just a line break

///Expressions
document.write(myHolder + myHolder );
document.write('<br>');	/// this is just a line break
document.write(myHolder * myHolder );
document.write('<br>');	/// this is just a line break
document.write(myText + ' ' + myText + ' ' + myHolder);
document.write('<br>');	/// this is just a line break
/*
*********

*********
*/
///Numbers
document.write(1);
document.write('<br>');  /// this is just a line break
document.write(1.5);
document.write('<br>');	/// this is just a line break
///Strings
document.write('Hello');
document.write('<br>');	/// this is just a line break
document.write("Hello");
document.write('<br>');	/// this is just a line break

///Variables
var myHolder = 6;
document.write(myHolder );
document.write('<br>');	/// this is just a line break
var myText = "hello";
document.write(myText);
document.write('<br>');	/// this is just a line break

///Expressions
document.write(myHolder + myHolder );
document.write('<br>');	/// this is just a line break
document.write(myHolder * myHolder );
document.write('<br>');	/// this is just a line break
document.write(myText + ' ' + myText + ' ' + myHolder);
document.write('<br>');	/// this is just a line break

///Number
var myNumber = 100;
document.write(myNumber);
document.write('<br>');  /// this is just a line break

///String
var myString = "Hello World";
document.write(myString);
document.write('<br>');	/// this is just a line break

///Array
var myArray = ["one","two","three"];
document.write(myArray[0]);
document.write('<br>');	/// this is just a line break
document.write(myArray[1]);
document.write('<br>');	/// this is just a line break
document.write(myArray[2]);
document.write('<br>');	/// this is just a line break

///Object
var myObject = {one:"This is first", two:"This is second"};  
document.write(myObject.one );
document.write('<br>');	/// this is just a line break
document.write(myObject.two );

///String
var myString = "Hello World is global";
document.write(myString);
document.write('<br>');	/// this is just a line break
document.write(myFunction());	
document.write('<br>');	/// this is just a line break
myOtherFunction(); /// Notice that when the function is called it changes the global variable
document.write(myString);
document.write('<br>');	/// this is just a line break
///Array
function myFunction() {
    var myString = "Hello World in the local function";
    return myString;
}
function myOtherFunction() {
    myString = "Hello World in a function but Global";
    return myString;
}
///Common String Methods
var myString = "Hello World is global";
document.write(myString);
document.write('<br>');	/// this is just a line break

document.write(myString.charAt(6));
document.write('<br>');	/// this is just a line break

document.write(myString.indexOf('o'));
document.write('<br>');	/// this is just a line break

document.write(myString.lastIndexOf('o'));
document.write('<br>');	/// this is just a line break

document.write(myString.replace('World','Everyone'));
document.write('<br>');	/// this is just a line break

document.write(myString.search('World'));
document.write('<br>');	/// this is just a line break

document.write(myString.slice(6));
document.write('<br>');	/// this is just a line break

document.write(myString.substr(3, 15));
document.write('<br>');	/// this is just a line break

document.write(myString.substring(4, 28));
document.write('<br>');	/// this is just a line break

document.write(myString.toLowerCase());
document.write('<br>');	/// this is just a line break

document.write(myString.toUpperCase());
document.write('<br>');	/// this is just a line break
///Common Number Methods
var myNumber = 100.1234;
document.write(myNumber);
document.write('<br>');	/// this is just a line break

document.write(myNumber.toString() + "hello");
document.write('<br>');	/// this is just a line break

document.write(myNumber.toFixed() );
document.write('<br>');	/// this is just a line break

var myString = "10.10 World 55 won't show";
document.write(parseInt(myString));
document.write('<br>');	/// this is just a line break

document.write(parseFloat(myString));
document.write('<br>');	/// this is just a line break
///Working with Numbers
var myNumber = 100.1234;
document.write(Math.random()*11+10);
document.write('<br>');	/// this is just a line break

document.write(Math.round(myNumber));
document.write('<br>');	/// this is just a line break

document.write(Math.ceil(myNumber));
document.write('<br>');	/// this is just a line break
///Dates
document.write(Date());
document.write('<br>');	/// this is just a line break

document.write(new Date(2014,11,31,5,10,30,0));
document.write('<br>');	/// this is just a line break

document.write(new Date("2014,DECEMBER,31"));
document.write('<br>');	/// this is just a line break

document.write(new Date().getTime());
document.write('<br>');	/// this is just a line break

document.write(new Date().getHours());
document.write('<br>');	/// this is just a line break
///Regular Expressions
var needle = /findme/i;
var myText = "if you can findme and replaceme then  this really works";

document.write(myText.search(needle));
document.write('<br>');	/// this is just a line break

var newText  = myText.replace(" this", "me");
document.write(newText);
document.write('<br>');	/// this is just a line break
