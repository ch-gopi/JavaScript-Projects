const button = document.querySelector("button");
    const output = document.querySelector(".output");
    //output.setAttribute("style","color:white;width: 200px;height: 100px;text-align: center;");
    button.addEventListener("click",showOutput);
    output.style.cssText ="color:white;width: 200px;height: 100px;text-align: center;";
    function showOutput(){
        const date = new Date();
        let cur = date.getHours();
        let message;
        console.log(cur);
        cur = 13;
        if(cur>17){
            message = "Its evening";
            output.style.backgroundColor = "black";
        }else if(cur > 12){
            message = "Its afternoon";
            output.style.backgroundColor = "blue";
        }else if(cur > 0){
            message = "Its morning";
            output.style.backgroundColor = "orange";
        }else{
            message = "Something is wrong";
            output.style.backgroundColor = "red";
        }
        
        output.innerHTML = "<h1>"+message+"</h1>";
        
        

    }