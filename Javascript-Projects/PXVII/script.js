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
            var myArray = ["Lisa", 20 , "pink"];  
            var mySecondArray = ["John", 25 , "blue"];  
            var output = "";
            
            ///Add to Array
            myArray.push("Next Item");  
            myArray[6] = "New Item";  
            
            xx = myArray.length;
            for	(i = 0; i < xx ; i++) {
                output += myArray[i] + "<BR>";
            }
            document.getElementById("footer").innerHTML = output;
            
            myArray.pop(); /// remove last element from array
            myArray.shift(); /// remove first element from array
            myArray.unshift("New Addition First"); /// remove first element from array
            console.log(myArray);
            //splice
            myArray.splice(2, 0, "one", "two");
            
            //sort
            myArray.sort();
            myArray.reverse(); 
            
            var newList = myArray.concat(mySecondArray);  
            console.log(newList);