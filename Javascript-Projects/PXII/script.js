
console.log('can you see me');  
window.alert('Iam Gopi');
document.write('Have a nice day!');
document.getElementById("header").innerHTML = "<h1>Welcome to JavaScript</h1>";
function img(){
    console.log('clicked');
    var image=document.getElementById("image");
    image.src="merns.jpeg";

}

function newText() {
	console.log("clicked");
	document.getElementById("footer").style.fontSize = "30px";
	}

	function Text() {
        console.log("clicked");
        var myNewText = "This is now different";
        document.getElementById("texter").innerHTML = myNewText;
        }