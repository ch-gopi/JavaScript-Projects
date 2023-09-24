
console.log('can you see me');  
window.alert('Iam Gopi');
document.write('Have a nice day!');

function img(){
    console.log('clicked');
    var image=document.getElementById("image");
    image.src="merns.jpeg";

}
document.getElementById("header").innerHTML = "<h1>"+newWords('Hello','Jack')+"</h1>";
function newWords(message,personsName) {
    myReturn = message + ' welcome to my website ' + personsName;
    return myReturn;
        }
/*	document.getElementById("header").innerHTML = "<h1>"+showCalulation(2342345,235)+"</h1>";
	function showCalulation(a,b) {
		
	return a + b;
	
 */
var myObject = {firstName:"ira", age:20 , favoriteColor:"green"};  
document.getElementById("person").innerHTML = "Name : "+myObject.firstName+"<br>";
document.getElementById("person").innerHTML += "age : "+myObject["age"]+"<br>";
document.getElementById("person").innerHTML += "Color : "+myObject["favoriteColor"]+"<br>";

function newText() {
	console.log("clicked");
    var l=document.getElementById("header").innerHTML 
    document.getElementById("footer").innerHTML = l;
	}

function Text() {
        console.log("clicked");
        var myNewText = "This is now different";
        document.getElementById("texter").innerHTML = myNewText;
    }
///Regular Expressions
var needle = /me/g;
var myText = document.getElementById("content").innerHTML; 

//document.getElementById("content").innerHTML = myText.search(needle);
//document.getElementById("content").innerHTML = myText.replace("me", " this");
document.getElementById("content").innerHTML = myText.replace(needle, " this");