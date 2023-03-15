
let menu = document.querySelector(".hide").classList;


document.querySelector(".hide").addEventListener("click", function (){
    
    if (menu.value === 'fa-sharp fa-solid fa-bars hide') {
        let pageLink = document.querySelector(".page-link").style;
        pageLink.visibility = "visible";
        document.querySelector(".page-link").style.display = "block";
        document.querySelector(".page-link").style.borderRadius = "3rem ";
        document.querySelector(".page-link").style.padding = "7rem 3rem ";
        document.querySelector(".page-link").style.backgroundColor = "white";
        document.querySelector(".page-link").style.position = "absolute";
        document.querySelector(".page-link").style.width = "60%";
        document.querySelector(".page-link").style.height = "100%";


        document.querySelector(".link1").style.display = "block";
        document.querySelector(".link1").style.fontSize = "1em";
        document.querySelector(".link1").style.marginBottom = "3rem";

        document.querySelector(".link2").style.display = "block";
        document.querySelector(".link2").style.fontSize = "1rem";
        document.querySelector(".link2").style.marginBottom = "3rem";

        document.querySelector(".link3").style.display = "block";
        document.querySelector(".link3").style.fontSize = "1rem";
        document.querySelector(".link3").style.marginBottom = "3rem";

        

        menu.remove("fa-sharp", "fa-solid", "fa-bars" );
        menu.add( "fa-solid", "fa-xmark" );
    } else {
        let pageLink = document.querySelector(".page-link").style;
        pageLink.visibility = "collapse";
        menu.remove( "fa-solid", "fa-xmark", "hide" );
        menu.add("fa-sharp", "fa-solid", "fa-bars", "hide" );
    }
    


})





