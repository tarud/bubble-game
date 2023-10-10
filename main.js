var time = 60;
var score = 0;
var hitrn;
function incscore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvals").textContent = hitrn;
}
function makebubble(){
    var clutter = "";

for(var i = 1; i<=184 ; i++){
    var rn = Math.floor(Math.random()*10)
     clutter += `<div class="bubble"> ${rn} </div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
     var timeint = setInterval (function(){
        if(time > 0){
        time--;
          document.querySelector("#timerval").textContent = time;
        }
        else{
          clearInterval(timeint);
          document.querySelector("#pbtm").innerHTML = `<h2> Game Over</h2>`;
        }
     },1000)
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednum =  Number(dets.target.textContent);
   if(clickednum === hitrn){
          incscore();
          makebubble();
          getnewhit();

   }
})
runtimer();
makebubble();
getnewhit();
incscore();
