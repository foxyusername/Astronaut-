let player=document.getElementById('player');
let object=document.getElementById('object');
let box=document.getElementById('box');
let score=document.getElementById('score');
let text=document.getElementById('text');
let ndcontainer=document.getElementById('ndcontainer');
let button=document.getElementById('button');
let container=document.getElementById('container');
let fast=document.getElementById('fast');
let medium=document.getElementById('medium');
let slow=document.getElementById('slow');
let song=document.getElementById('song');
const sound=new Audio();
sound.src='sound.mp3';
const whistle=new Audio();
whistle.src='whistle.mp3';

let value;
let seconds;

song.onclick=function (){
    whistle.play();
    song.style.display='none';
}

fast.onclick=function(){
    value=500;
    setInterval( animation,value);
   seconds=0.5 +'s';
   fast.style.display='none';
   medium.style.display='none';
   slow.style.display='none';
   song.style.display='none';
}
medium.onclick=function(){
    value=700;
    setInterval( animation,value);
    seconds=0.7 +'s';
    fast.style.display='none';
   medium.style.display='none';
   slow.style.display='none';
   song.style.display='none';
}
slow.onclick=function(){
    value=900;
    setInterval( animation,value);
    seconds=0.9 +'s';
    fast.style.display='none';
   medium.style.display='none';
   slow.style.display='none';
   song.style.display='none';
}
function animation(){
    var x=Math.random() * 480;
    object.style.left=x + 'px';
    object.style.animation='animation '+ seconds +' infinite';
  var interval= setInterval(move,10);
  score.innerText++;


    function move(){
        var playerLeft=parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        var objectTop=parseInt(window.getComputedStyle(object).getPropertyValue('top'));
        var objectLeft=parseInt(window.getComputedStyle(object).getPropertyValue('left'));
    
  if(objectTop<-15&& playerLeft + 50>objectLeft && playerLeft<objectLeft + 25){
     sound.play();
        object.style.display='none';
       score.style.display='none';
            ndcontainer.style.display='block';
        text.innerText='☾ you got ' + score.innerText + ' Moonpoints ☽';

     button.onclick=function(){
         ndcontainer.style.display='none';
         location.reload();
        } 
    }
        }
}
box.addEventListener('mousemove', (e)=>{
    if(e.offsetX>0 && e.offsetX<440){
        player.style.left=e.offsetX +'px';
    }
})

