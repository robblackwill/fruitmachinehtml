 let reel3=document.querySelector("#reel3")
 let play=document.querySelector("#play")

console.log("spinning");
let reel1=document.querySelector("#reel1")
let reel2=document.querySelector("#reel2")
let reel3=document.querySelector("#reel3")
let vpos=0
setInterval(scrollY,10)
function scrollY(){
vpos++

reel1.scrollTop=vpos
reel2.scrollTop=vpos
reel3.scrollTop=vpos
}
 function scrollreel() {let reel=document.querySelector("#reel")
           reel1.scrollTop=100;
           reel2.scrollTop=100;
           reel3.scrollTop=100;
         }