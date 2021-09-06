var cont = 0;
function dark(){
    var estado = document.getElementById("a1").innerHTML;
    if(estado == "Light Mode ON"){
        document.getElementById("a1").style.color = "white";
        document.getElementById("a1").innerHTML = "Dark mode ON";
        document.getElementById("botao1").innerHTML = "Light Mode";
        document.body.style.background = "black";
        document.getElementById("botao1").style.background = "white"
        document.getElementById("botao1").style.color = "black";

    }else{
        document.getElementById("a1").style.color = "black";
        document.getElementById("a1").innerHTML = "Light Mode ON";
        document.getElementById("botao1").innerHTML = "Dark Mode";
        document.body.style.background = "white";
        document.getElementById("botao1").style.background = "black"
        document.getElementById("botao1").style.color = "white";
    }

    
}

