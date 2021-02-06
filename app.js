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
    newArrow.style.display= "initial"

}
function replace2(){
    let image = document.getElementById("chickenhawk");
    let newArrow = document.getElementById("chickenhawk2")
    image.style.display = "initial"
    newArrow.style.display= "none"
}


document.getElementById("chickenhawk2").addEventListener("click", function(){setTimeout(replace2, 200)});

document.getElementById("chickenhawk").addEventListener("click", function(){setTimeout(replace, 200)});

document.getElementById("portfolioEvent").addEventListener("click", function(){setTimeout(replace, 200)});
