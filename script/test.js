let reel3=document.querySelector("#reel3")
let play=document.querySelector("#play")

console.log("spinning");

let vpos=0
setInterval(scrollY,10)
function scrollY(){
vpos++
let reel3=document.querySelector("#reel3")
reel3.scrollTop=vpos
}
function scrollreel3() {let reel3=document.querySelector("#reel3")
          reel3.scrollTop=100;
        }