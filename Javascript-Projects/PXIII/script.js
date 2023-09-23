
console.log('can you see me');  
window.alert('Iam Gopi');
document.write('Have a nice day!');

function img(){
    console.log('clicked');
    var image=document.getElementById("image");
    image.src="merns.jpeg";

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
