
let show = () => {
    let name = document.getElementById("name").value;
    document.getElementById("display").innerHTML="Wish you a very Happy New Year to "+name;
    document.getElementById("img").src="./images/2023.gif";
    document.getElementById("content").innerHTML="New year, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and usher in the new year. It's such a celebratory, positive time which keeps everyone in good spirits!";
    document.getElementById("dis").style.color="#FFFFFF";
    }
document.getElementById("btn").addEventListener("click", show);
    
//    //cd.. ==> to to go back  [change directory]
