function responsiveNav(){
    var x = document.getElementById("navBar");
    if (x.className === "navlinks"){
        x.className += " responsive";
    }
    else{
        x.className = "navlinks";
    }
}

var menu = document.getElementById('responsive');

menu.addEventListener('click', responsiveNav, false);