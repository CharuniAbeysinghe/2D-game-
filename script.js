function key(event) {
    if(event.which == 13) {//enter
        
        if(rw == 0){
            fid = f();
            rw = setInterval(run,100);
            rs.play();
            bw = setInterval(b,100);   
            sw = setInterval(updateScore,100); 
            fw = setInterval(move,100);
        }  
        
    }

    if (event.which == 32) {//space

        if (jw == 0){
            clearInterval(rw);
            rs.pause();
            rw = -1;
            jw = setInterval(jump, 100);
            js.play();   
        }
        
    }
}

//run, jump and dead
var rs = new Audio("run.mp3");
rs.loop = true;
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");

//flame function
var m = 700;
var fid = 0;
function f() {

    for(var y = 0; y < 10; y++){
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.style.marginLeft = m + "px";
        i.id = "a" + y;
        m = m + 500;
      
        document.getElementById("b").appendChild(i);
    }
 
}
//boy run animation
var r = 1;
var rw = 0;
function run(){
  var rimg = document.getElementById("boy");
  r = r + 1;
  if(r == 9){
    r = 1;
  }
  rimg.src = "Run (" + r + ").png";
}

var x = 0;
var bw = 0;
function b(){
    x = x-20;
    document.getElementById("b").style.backgroundPositionX = x  + "px";
}

var u = 0;
var sw = 0;
function updateScore(){
    u = u+1;
    document.getElementById("score").innerHTML = u;
}

//background/flame move
var fw = 0;
function move(){
    
    for(var y = 0; y<10; y++){

      var d = document.getElementById("a"+y);
      var z = getComputedStyle(d);
      var p = parseInt(z.marginLeft);
      p = p - 20;
      d.style.marginLeft = p + "px";
      
        //180 60
        if(p>60 & p<180){
            if(mt>300){
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw = -1;
                clearInterval(sw);
                clearInterval(bw);
                clearInterval(fw);
                dw = setInterval(dead,100);
                ds.play();
            }
        }

    }
}

//jump animation
var j = 1;
var jw = 0;
var mt = 390;
function jump(){

   var jimg = document.getElementById("boy");

   if(j <= 6){//1-6png
    mt = mt-30;
   }

   if(j >= 7){//7-12png
    mt = mt + 30;
   }
   jimg.style.marginTop = mt + "px";

   j = j + 1;

   if(j == 13){
    j = 1;
    clearInterval(jw);
    jw = 0;
    rw=setInterval(run,100);
    rs.play();

    if(fid == 0){
        fid = f();
    }

    if(fw == 0){
        fw = setInterval(move,100);
    }

    if(bw == 0){
        bw = setInterval(b,100);
    }

    if(sw == 0){
        sw = setInterval(updateScore,100);
    }
   }
   jimg.src = "Jump (" + j + ").png";
}

//boy dead animation
var d = 1;
var dw = 0;
function dead(){
    var dimg = document.getElementById("boy");
    d = d+1;
    if(d == 11){
        d = 10;
        dimg.style.marginTop = "390px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = u;
    }
    dimg.src = "Dead ("+d+").png";
}

function re(){
    location.reload();
}