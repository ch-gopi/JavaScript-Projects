
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
