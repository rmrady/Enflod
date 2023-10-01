$(function(){
    $(".home").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });


    $(".portfolio").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });

    $(".blog").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });


    $(".pages").hover(function(){
        $(this).sibling("ul").slideDown();
    },function(){
        $(this).sibling("ul").slideUp();
    });



    $(".shorts").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });



    $(".shop").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });
/*--------------------------------------------------------------- */

    $(".section3").hover(function(){
        $(".gallery7 #img1").fadeIn(1000)
        $(".gallery7 #img2").fadeIn(3000)
        $(".gallery7 #img3").fadeIn(5000)
        $(".gallery7 #img4").fadeIn(7000)
        $(".gallery7 #img5").fadeIn(9000)
        $(".gallery7 #img6").fadeIn(9300)
        $(".gallery7 #img7").fadeIn(9400)
    });

/*--------------------------------------------------------------- */

    $(".section4").hover(function(){
        $(".box2 .icon1").fadeIn(4000)
        $(".box2 .icon2").fadeIn(4000)
        $(".box2 .icon3").fadeIn(6000)
        $(".box2 .icon4").fadeIn(8000)
    })
/*--------------------------------------------------------------- */
    $(".section5").hover(function(){
        $(".mob1 img").fadeIn(4000);
    })
/*--------------------------------------------------------------- */
    $(".section6").hover(function(){
        $(".Martha1 img").fadeIn(4000);
        $(".Maxi1 img").fadeIn(5000);
        $(".Anna1 img").fadeIn(6000);
        $(".Dr-Dosist1 img").fadeIn(7000);
    
    })


    $(".img-floor").show(function(){
        $(".slide1").fadeIn(4000);
        $(".slide2").fadeIn(5000);
        $(".slide3").fadeIn(5000);
        $(".slide4").fadeIn(5000);
        $(".slide5").fadeIn(5000);
    })
    
})

/*--------------------------------------------------------------- */

function show(imgId){
    var imgsrc = document.getElementById(imgId).getAttribute("src");
    imgsrc = imgsrc.replace("small", "big") ;
    document.getElementById("big-img").setAttribute("src", imgsrc)
}

/*--------------------------------------------------------------- */


var images = ["./img/floor1.jpg","./img/floor2.jpg","./img/floor3.jpg"]
var index =0;
document.querySelector(".next").addEventListener("click", next)
document.querySelector(".prov").addEventListener("click", prov)
/*--------------------------------------------------------------- */
var flag = true;
function next(){
    if (flag == true){
        index++;
    }
    else if(index == images.length - 1){
        flag = false;
        document.querySelector(".next").removeEventListener("click" , next)
    }
    else{
        flag = true;
    }
    document.querySelector(".slider img").src = images[index]
}

/*--------------------------------------------------------------- */
function prov(){
    index--;
    if(index < 0){
        index = images.length -1 ;
    }
    document.querySelector(".slider img").src = images[index]
}
/*--------------------------------------------------------------- */
setInterval(function(){
    if (flag == true){
        index++;
        document.querySelector(".slider img").src = images[index]  

    }
    else{
        flag = false;
    }
},7000)
/*--------------------------------------------------------------- */