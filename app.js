window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("chickenhawk");
    let image2 = document.getElementById("chickenhawk2");

    image.style.transform = "rotate(" + window.pageYOffset/16 + "deg)";
    image2.style.transform = "rotate(" + window.pageYOffset/16 + "deg)";
    image.style.bottom = window.pageYOffset/100 + "px"
}
function scrollmoveDown(){
    let image = document.getElementById("arrow");
    image.style.bottom = "100px"

} 

function replace(){
    let image = document.getElementById("chickenhawk");
    let newArrow = document.getElementById("chickenhawk2")
    image.style.display = "none"
    newArrow.style.display= "inherit"

}
function replace2(){
    let image = document.getElementById("chickenhawk");
    let newArrow = document.getElementById("chickenhawk2")
    image.style.display = "inherit"
    newArrow.style.display= "none"
}



document.getElementById("chickenhawk2").addEventListener("click", function(){setTimeout(replace2, 200)});

document.getElementById("chickenhawk").addEventListener("click", function(){setTimeout(replace, 200)});

document.getElementById("portfolioEvent").addEventListener("click", function(){setTimeout(replace, 200)});


document.getElementById("this-small").addEventListener("click",function(){setTimeout(mouseOverThis, 200)})
document.getElementById("poke-small").addEventListener("click",function(){setTimeout(mouseOverPoke, 200)})
document.getElementById("cli-small").addEventListener("click",function(){setTimeout(mouseOverCli, 200)})
document.getElementById("tune-small").addEventListener("click",function(){setTimeout(mouseOverTune, 200)})


function mouseOverTune(){
    document.getElementById("tune-small").style.display="none";

    document.getElementById("tune-big").style.display = "inherit";

    document.getElementById("this-big").style.display = "none";
    document.getElementById("cli-big").style.display = "none";
    document.getElementById("poke-big").style.display = "none";


    document.getElementById("this-small").style.display="inherit";
    document.getElementById("poke-small").style.display = "inherit";
    document.getElementById("cli-small").style.display="inherit";


    document.getElementById("tune-title").style.display="inherit";
    document.getElementById("tune-description").style.display="inherit";
    document.getElementById("poke-title").style.display="none";
    document.getElementById("poke-description").style.display="none";
    document.getElementById("this-title").style.display="none";
    document.getElementById("this-description").style.display="none";
    document.getElementById("cli-title").style.display="none";
    document.getElementById("cli-description").style.display="none";

    document.getElementById("selector2").style.display="inherit";
    document.getElementById("selector").style.display="none";
    document.getElementById("selector3").style.display="none";
    document.getElementById("selector4").style.display="none";



}

function mouseOverThis(){

    document.getElementById("this-big").style.display = "inherit";

    document.getElementById("tune-big").style.display = "none";
    document.getElementById("poke-big").style.display = "none";
    document.getElementById("cli-big").style.display = "none";

    document.getElementById("poke-small").style.display = "inherit";
    document.getElementById("tune-small").style.display = "inherit";
    document.getElementById("cli-small").style.display = "inherit";

    document.getElementById("this-small").style.display="none";

    document.getElementById("tune-title").style.display="none";
    document.getElementById("tune-description").style.display="none";
    document.getElementById("poke-title").style.display="none";
    document.getElementById("poke-description").style.display="none";
    document.getElementById("this-title").style.display="inherit";
    document.getElementById("this-description").style.display="inherit";
    document.getElementById("cli-title").style.display="none";
    document.getElementById("cli-description").style.display="none";

    document.getElementById("selector").style.display="inherit";
    document.getElementById("selector2").style.display="none";
    document.getElementById("selector3").style.display="none";
    document.getElementById("selector4").style.display="none";






}

function mouseOverPoke(){

    document.getElementById("poke-big").style.display = "inherit";
    
    document.getElementById("tune-big").style.display = "none";
    document.getElementById("this-big").style.display = "none";
    document.getElementById("cli-big").style.display = "none";

    document.getElementById("this-small").style.display = "inherit";
    document.getElementById("tune-small").style.display = "inherit";
    document.getElementById("cli-small").style.display = "inherit";

    document.getElementById("poke-small").style.display="none";

    document.getElementById("tune-title").style.display="none";
    document.getElementById("tune-description").style.display="none";
    document.getElementById("poke-title").style.display="inherit";
    document.getElementById("poke-description").style.display="inherit";
    document.getElementById("this-title").style.display="none";
    document.getElementById("this-description").style.display="none";
    document.getElementById("cli-title").style.display="none";
    document.getElementById("cli-description").style.display="none";

    document.getElementById("selector").style.display="none";
    document.getElementById("selector2").style.display="none";
    document.getElementById("selector3").style.display="inherit";
    document.getElementById("selector4").style.display="none";


}

function mouseOverCli(){
    document.getElementById("cli-big").style.display = "inherit";
    
    document.getElementById("tune-big").style.display = "none";
    document.getElementById("this-big").style.display = "none";
    document.getElementById("poke-big").style.display = "none";

    document.getElementById("this-small").style.display = "inherit";
    document.getElementById("tune-small").style.display = "inherit";
    document.getElementById("poke-small").style.display = "inherit";

    document.getElementById("cli-small").style.display="none";



    document.getElementById("tune-title").style.display="none";
    document.getElementById("tune-description").style.display="none";
    document.getElementById("poke-title").style.display="none";
    document.getElementById("poke-description").style.display="none";
    document.getElementById("this-title").style.display="none";
    document.getElementById("this-description").style.display="none";
    document.getElementById("cli-title").style.display="inherit";
    document.getElementById("cli-description").style.display="inherit";


    document.getElementById("selector").style.display="none";
    document.getElementById("selector2").style.display="none";
    document.getElementById("selector3").style.display="none";
    document.getElementById("selector4").style.display="inherit";


}

function displayTune(){
    document.getElementById("tune-small").style.display="none";
    document.getElementById("tune-small-over").style.display="inherit";



}
function displayTuneReg(){
    document.getElementById("tune-small").style.display="inherit";
    document.getElementById("tune-small-over").style.display="none";



}
function displayThis(){
    document.getElementById("this-small").style.display="none";
    document.getElementById("this-small-over").style.display="inherit";



}
function displayThisReg(){
    document.getElementById("this-small").style.display="inherit";
    document.getElementById("this-small-over").style.display="none";



}
function displayCli(){
    document.getElementById("cli-small").style.display="none";
    document.getElementById("cli-small-over").style.display="inherit";



}
function displayCliReg(){
    document.getElementById("cli-small").style.display="inherit";
    document.getElementById("cli-small-over").style.display="none";



}


function displayPoke(){
    document.getElementById("poke-small").style.display="none";
    document.getElementById("poke-small-over").style.display="inherit";



}
function displayPokeReg(){
    document.getElementById("poke-small").style.display="inherit";
    document.getElementById("poke-small-over").style.display="none";
    


}



// document.getElementById("tune-small").addEventListener("mouseover",displayTune)
// document.getElementById("tune-small-over").addEventListener("mouseout", function(){setTimeout(displayTuneReg, 200)});

// document.getElementById("this-small").addEventListener("mouseover",displayThis)
// document.getElementById("this-small-over").addEventListener("mouseout",displayThisReg)

// document.getElementById("cli-small").addEventListener("mouseover",displayCli)
// document.getElementById("cli-small-over").addEventListener("mouseout",displayCliReg)

// document.getElementById("poke-small").addEventListener("mouseover",displayPoke)
// document.getElementById("poke-small-over").addEventListener("mouseout",displayPokeReg)






//fix project photos

//modal ordering
//fonts