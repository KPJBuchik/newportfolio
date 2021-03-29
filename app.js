


    window.onscroll = function () {
        scrollRotate();

    };



    // While PX, EM, and REM are primarily used for font sizing, %, VW, and VH are mostly used for margins, padding, spacing, and widths/heights. To reiterate, VH stands for “viewport height”, which is the viewable screen's height. 100VH would represent 100% of the viewport's height, or the full height of the screen.Nov 13, 2020


    

    

    
    function scrollRotate() {
        let image = document.getElementById("chickenhawk");
        let image2 = document.getElementById("chickenhawk2");

        image.style.transform = "rotate(" + window.pageYOffset / 16 + "deg)";
        image2.style.transform = "rotate(" + window.pageYOffset / 16 + "deg)";
        image.style.bottom = window.pageYOffset / 100 + "px"
    }
    function scrollmoveDown() {
        let image = document.getElementById("arrow");
        image.style.bottom = "100px"

    }

    function replace() {
        let image = document.getElementById("chickenhawk");
        let newArrow = document.getElementById("chickenhawk2")
        image.style.display = "none"
        newArrow.style.display = "inherit"

    }
    function replace2() {
        let image = document.getElementById("chickenhawk");
        let newArrow = document.getElementById("chickenhawk2")
        image.style.display = "inherit"
        newArrow.style.display = "none"
    }


    $("#chickenhawk").on("click", function () {
        let image = document.getElementById("chickenhawk");
        let image2 = document.getElementById("chickenhawk2");

        image.style.transform = "rotate(" + 45 + "deg)";
        image2.style.transform = "rotate(" + 45 + "deg)";



    })
    $("#chickenhawk2").on("click", function () {
        let image = document.getElementById("chickenhawk");
        let image2 = document.getElementById("chickenhawk2");

        image.style.transform = "rotate(" + -16 + "deg)";
        image2.style.transform = "rotate(" + -16 + "deg)";

        // $("#container-911").css("margin-top", "11vh");


        scrollDivElement.scrollTo({
            top: 0,
            behavior: 'smooth'

        })




    })

    document.getElementById("chickenhawk2").addEventListener("click", function () { setTimeout(replace2, 200) });

    document.getElementById("chickenhawk").addEventListener("click", function () { setTimeout(replace, 200) });

    document.getElementById("portfolioEvent").addEventListener("click", function () { setTimeout(replace, 200) })

    document.getElementById("chickenhawk").addEventListener("click", function () { setTimeout(replace, 200) });


    $(".link").on("click", function () {
        $(".aboutmodal").modal('hide');
    });






    // if ($(window).width() >= 800) {


        $("#chickenhawk2").on("click", function () {
    
            $("#scrollable-div").css("margin-top", "5vh");
    
    
            
    
        })
    




    $(".big-project-photo").on("click", function () {
        var scroll = $("#scrollable-div").scrollTop();

        console.log(scroll)
    })

    var scrollDivElement = document.getElementById('scrollable-div');

    $("#down-cli").on("click", function () {



        scrollDivElement.scrollTo({
            top: 167,
            behavior: 'smooth'

        })

    })

    $("#down-this").on("click", function () {

        scrollDivElement.scrollTo({
            top: 296,
            behavior: 'smooth'

        })

    })

    $("#down-poke").on("click", function () {

        scrollDivElement.scrollTo({
            top: 500,
            behavior: 'smooth'

        })

    })

    $("#up-tune").on("click", function () {


        scrollDivElement.scrollTo({
            top: 0,
            behavior: 'smooth'

        })

    })

    $("#up-cli").on("click", function () {


        scrollDivElement.scrollTo({
            top: 167,
            behavior: 'smooth'

        })

    })

    $("#up-this").on("click", function () {


        scrollDivElement.scrollTo({
            top: 296,
            behavior: 'smooth'

        })

    })







    $(function () {

        $("#scrollable-div").scroll(function () {
            var scroll = $("#scrollable-div").scrollTop();

            if (scroll >= 150) {

                $("#scrollable-div").css("margin-bottom", "100px")


                $("#this-big").css("height", "initial")
                $("#tune-big").css("height", "11vh")
                $("#poke-big").css("height", "11vh")
                $("#cli-big").css("height", "11vh")


                $("#this-big").css("margin-left", "0px")
                $("#tune-big").css("margin-left", "46vw")
                $("#poke-big").css("margin-left", "46vw")
                $("#cli-big").css("margin-left", "46vw")





                $("#tune-logo").css("display", "none")
                $("#cli-logo").css("display", "none")
                $("#this-logo").css("display", "inherit")
                $("#poke-logo").css("display", "none")

                $("#cli-title").css("display", "none")
                $("#p-cli").css("display", "none")

                $("#this-title").css("display", "inherit")
                $("#p-this").css("display", "inherit")


                $("#tune-title").css("display", "none")
                $("#p-tune").css("display", "none")
                $("#tune-title").css("display", "none")
                $("#p-tune").css("display", "none")
                $("#poke-title").css("display", "none")
                $("#p-poke").css("display", "none")

                $("#down-cli").css("display", "none");
                $("#down-this").css("display", "inherit");
                $("#down-poke").css("display", "none");
                $("#down-tune").css("display", "none");


                $("#up-tune").css("display", "inherit")
                $("#up-this").css("display", "none");
                $("#up-cli").css("display", "none");

                $("#cli-side").css("display", "inherit")
                $("#this-side").css("display", "none")
                $("#poke-side").css("display", "none")


                $("#scroll-flair").css("top", "86vh")

                $("#down").css("display", "inherit")

                $("#github-link").attr("href", "https://github.com/JayG92/thissocialmedia")
                $("#link-link").attr("href", "https://thissocial.herokuapp.com/")

            }

            if (scroll >= 250) {



                $("#this-big").css("height", "11vh")
                $("#tune-big").css("height", "11vh")
                $("#cli-big").css("height", "initial")
                $("#poke-big").css("height", "11vh")



                $("#this-big").css("margin-left", "46vw")
                $("#tune-big").css("margin-left", "46vw")
                $("#poke-big").css("margin-left", "46vw")
                $("#cli-big").css("margin-left", "0px")




                $("#this-logo").css("display", "none")
                $("#cli-logo").css("display", "inherit")
                $("#tune-logo").css("display", "none")


                $("#this-title").css("display", "none")
                $("#p-this").css("display", "none")

                $("#cli-title").css("display", "inherit")
                $("#p-cli").css("display", "inherit")
                $("#tune-title").css("display", "none")
                $("#p-tune").css("display", "none")
                $("#poke-title").css("display", "none")
                $("#p-poke").css("display", "none")

                $("#down-poke").css("display", "inherit");
                $("#down-cli").css("display", "none");
                $("#down-this").css("display", "none");
                $("#down-tune").css("display", "none");

                $("#down-poke").css("display", "inherit");
                $("#up-tune").css("display", "none");
                $("#up-cli").css("display", "none");

                $("#up-cli").css("display", "inherit");


                $("#this-side").css("display", "none")
                $("#poke-side").css("display", "inherit")
                $("#cli-side").css("display", "none")



                $("#down").css("display", "inherit")

                $("#github-link").attr("href", "https://github.com/KPJBuchik/Bamazon")
                $("#link-link").attr("href", "https://github.com/KPJBuchik/Bamazon")
                $("#scroll-flair").css("opacity","0")



            }
            if (scroll >= 400) {


                $("#this-big").css("height", "11vh")
                $("#tune-big").css("height", "11vh")
                $("#cli-big").css("height", "11vh")
                $("#poke-big").css("height", "initial")



                $("#this-big").css("margin-left", "46vw")
                $("#tune-big").css("margin-left", "46vw")
                $("#poke-big").css("margin-left", "0px")
                $("#cli-big").css("margin-left", "46vw")

                $("#poke-title").css("display", "inherit")
                $("#p-poke").css("display", "inherit")

                $("#cli-title").css("display", "none")
                $("#p-cli").css("display", "none")
                $("#tune-title").css("display", "none")
                $("#p-tune").css("display", "none")
                $("#this-title").css("display", "none")
                $("#p-this").css("display", "none")

                $("#down-poke").css("display", "inherit");

                $("#down-cli").css("display", "none");
                $("#down-this").css("display", "none");
                $("#down-tune").css("display", "none");
                $("#up-tune").css("display", "none");

                $("#up-cli").css("display", "none");

                $("#up-this").css("display", "inherit");

                $("#poke-side").css("display", "none")
                $("#cli-side").css("display", "none")


                $("#down").css("display", "none")

                $("#github-link").attr("href", "https://github.com/KPJBuchik/Project2")
                $("#link-link").attr("href", "https://rocky-earth-06157.herokuapp.com/")



                $("#this-logo").css("display", "none")
                $("#cli-logo").css("display", "none")
                $("#tune-logo").css("display", "none")
                $("#poke-logo").css("display", "inherit")



                $("#scroll-flair").css("opacity","0")

            }

            if (scroll == 0) {

                $("#this-big").css("height", "11vh")
                $("#tune-big").css("height", "initial")
                $("#cli-big").css("height", "11vh")
                $("#poke-big").css("height", "11vh")

                $("#this-big").css("margin-left", "46vw")
                $("#tune-big").css("margin-left", "0px")
                $("#poke-big").css("margin-left", "46vw")
                $("#cli-big").css("margin-left", "46vw")


                $("#down-cli").css("display", "inherit")

                $("#tune-logo").css("display", "inherit");
                $("#this-logo").css("display", "none");
                $("#poke-logo").css("display", "none");
                $("#cli-logo").css("display", "none");


                $("#tune-title").css("display", "inherit")
                $("#p-tune").css("display", "inherit")


                $("#cli-title").css("display", "none")
                $("#p-cli").css("display", "none")
                $("#this-title").css("display", "none")
                $("#p-this").css("display", "none")
                $("#poke-title").css("display", "none")
                $("#p-poke").css("display", "none")

                $("#up-this").css("display", "none");
                $("#up-cli").css("display", "none");


                $("#down-cli").css("display", "inherit");
                $("#down-this").css("display", "none");
                $("#down-poke").css("display", "none");

                $("#poke-side").css("display", "inherit")
                $("#this-side").css("display", "inherit")
                $("#cli-side").css("display", "inherit")

                // $("#down").css("display","inherit")

                $("#github-link").attr("href", "https://github.com/KPJBuchik/TuneAlmanac")
                $("#link-link").attr("href", "https://kpjbuchik.github.io/TuneAlmanac/#")





            }

        });
    });
// }

// if ($(window).width() <= 800) {

//     $("#down-cli").on("click", function () {
//         $("#tune-big").attr("src", "assets/this-big.png")

//         $("#down-this").css("display", "inherit");
//         $("#down-cli").css("display", "none");

//         $("#this-title").css("display", "inherit")
//         $("#p-this").css("display", "inherit")

//         $("#cli-title").css("display", "none")
//         $("#p-cli").css("display", "none")


//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#poke-title").css("display", "none")
//         $("#p-poke").css("display", "none")

//         $(".big-project-photo").css("top", "-4")





//     })
//     $("#down-this").on("click", function () {
//         $("#tune-big").attr("src", "assets/cli-big.png")
//         $("#down-this").css("display", "none");
//         $("#down-cli").css("display", "none");
//         $("#down-poke").css("display", "inherit");

//         $("#this-title").css("display", "none")
//         $("#p-this").css("display", "none")

//         $("#cli-title").css("display", "inherit")
//         $("#p-cli").css("display", "inherit")


//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#poke-title").css("display", "none")
//         $("#p-poke").css("display", "none")

//         $(".big-project-photo").css("top", "34")



//     })

//     $("#down-poke").on("click", function () {
//         $("#tune-big").attr("src", "assets/poke-big.png")
//         $("#up-this").css("display", "inherit");
//         $("#up-tune").css("display", "none");


//         $("#this-title").css("display", "none")
//         $("#p-this").css("display", "none")

//         $("#cli-title").css("display", "none")
//         $("#p-cli").css("display", "none")


//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#poke-title").css("display", "inherit")
//         $("#p-poke").css("display", "inherit")

//         $(".big-project-photo").css("top", "-4")


//     })

//     $("#up-this").on("click", function () {
//         $("#tune-big").attr("src", "assets/cli-big.png")
//         $("#up-this").css("display", "none");
//         $("#up-tune").css("display", "none");
//         $("#up-cli").css("display", "inherit");

//         $("#this-title").css("display", "none")
//         $("#p-this").css("display", "none")

//         $("#cli-title").css("display", "inherit")
//         $("#p-cli").css("display", "inherit")


//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#poke-title").css("display", "none")
//         $("#p-poke").css("display", "none")


//         $(".big-project-photo").css("top", "24")

        


//     })

//     $("#up-cli").on("click", function () {
//         $("#tune-big").attr("src", "assets/this-big.png")
//         $("#up-this").css("display", "none");
//         $("#up-tune").css("display", "inherit");
//         $("#up-cli").css("display", "none");

//         $("#down-this").css("display", "none");
//         $("#down-cli").css("display", "inherit");
//         $("#down-poke").css("display", "none");

//         $("#this-title").css("display", "inherit")
//         $("#p-this").css("display", "inherit")

//         $("#cli-title").css("display", "none")
//         $("#p-cli").css("display", "none")


//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#tune-title").css("display", "none")
//         $("#p-tune").css("display", "none")
//         $("#poke-title").css("display", "none")
//         $("#p-poke").css("display", "none")

//         $(".big-project-photo").css("top", "-4")






//     })
//     $("#up-tune").on("click", function () {
//         $("#tune-big").attr("src", "assets/tune-big.png")

//         $("#tune-title").css("display", "64vh")
//         $("#p-tune").css("display", "64vh")
//         $("#this-title").css("display", "none")
//         $("#p-this").css("display", "none")
//         $("#cli-title").css("display", "none")
//         $("#p-cli").css("display", "none")


//         $("#poke-title").css("display", "none")
//         $("#p-poke").css("display", "none")

//         $(".big-project-photo").css("top", "20")


       




//     })


//     $("#chickenhawk2").on("click", function () {
//         $("#portfolio-header").css("top","232px")




// })

// }




// //fix project photos

// //modal ordering
// //fonts


// new PageScroll('#pagescroll', {
//     animDuration: 2000 
// })



// do a click anchor point for the scrollable-div
// you can clean it up like that
// just put more space between the pictures
// up and down arrows
// change the position of the small images on click maybe
// diagram first kevin!!!!