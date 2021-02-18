"use strict";

const prompt = require('prompt-sync')({sigint: true});

//apple banana cherry diamiond avocado

//D R Y

const a= 'apple'
const b= 'banana'
const c= 'cherry'
const d= 'diamond'
const av= 'avocado'

const reel1=[a,b,d,av,a,b,d,c,a,b]
const reel2=[a,av,c,b,b,c,a,b,a,a]
const reel3=[c,av,c,d,b,a,b,c,a,d]

let money=100
let started=process.hrtime() //returns a [seconds][nanoseconds] tuple

let costperspin = 1


//while (money>costperspin) {
   console.log('You have £' + money )
   prompt('Press enter to spin the wheels')
   
 money = money - costperspin //pay £1 to play

 let p1 = Math.floor(Math.random() * 10)
 let p2 = Math.floor(Math.random() * 10)
 let p3 = Math.floor(Math.random() * 10)

 console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

 if (checkReelsMatch(p1,p2,p3)){

       console.log ('You win :o)')
       if (reel1[p1]==a){
       money = money + 2
       console.log ('£2')
      }
       else if (reel1[p1]==c){
       money = money + 5
       console.log ('5')
      }
       else if (reel1[p1]==b){
       money = money + 8
       console.log ('8')
      }

       else if (reel1[p1]==d){
        money = money + 10 
        console.log('10')
      }
       else if (reel1[p1]==av){
         money = money + 20
         console.log('20')
      }
        
   }
   
   else {
       console.log('you lose :o(')

 
    }    

 
   
function checkReelsMatch(p1,p2,p3){
    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3])        
       return true
   
   }

function hold(userChoice){
   currentvalue = document.getElementById('reel1').value;
   if(userChoice === getElementById("hold1")){
   document.getElementById("reel1").value="On";
   }else{
   document.getElementById("reel1").value="Off";
   }
   }
   let secondsPassed;
let oldTimeStamp;
let fps;

