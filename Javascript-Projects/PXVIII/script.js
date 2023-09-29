function displayPage(pageID) {
	document.getElementById("content").innerHTML = "New Content : "+pageID+"<br>This has changed!!!<BR>";
	}
function displayred() {
        document.getElementById("section").style.backgroundColor = "red";
        }
        
function displaywhite() {
        document.getElementById("section").style.backgroundColor = "white";
        }
function Text() {
            console.log("clicked");
            var myNewText = "This is now different";
            document.getElementById("tex").innerHTML = myNewText;
            }