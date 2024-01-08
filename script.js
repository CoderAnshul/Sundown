const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    // var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// console.log(image)

// var abc = elemC.getAttribute("data-image")
// console.log(abc);
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(dets){
    fixed.style.display = "block"

})
// elemC.addEventListener("mousemove",function(dets){
//     gsap.to(fixed,{
//         left:dets.x-200,
//         top:dets.y-200
//     })
// })
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
        image.style.height = "100%"
    })
})
}


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      });
}


function menuAnimation(){
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click",function(){
        if(flag == 0){
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }else{
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
function loaderanimation(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)
}


loaderanimation()
swiperAnimation()
page4Animation()
menuAnimation()

