
 function showShape(){
  var num = Math.floor(Math.random()*3);
  var size = Math.floor(Math.random()*90+5)+"px";
  var x=document.getElementById("circle");
  if(num===0){
    x = document.getElementById("circle");
    document.getElementById("rounded").style.display="none";
    document.getElementById("square").style.display="none";
  }else if (num ===1) {
    x = document.getElementById("square");
    document.getElementById("circle").style.display="none";
    document.getElementById("rounded").style.display="none";
  }else {
    x = document.getElementById("rounded");
    document.getElementById("circle").style.display="none";
    document.getElementById("square").style.display="none";
  }
  if(x.style.display === "block"){
    x.style.display = "none";
  }else {
    x.style.display = "block";
  }
  x.style.width=size;
  x.style.height=size;
}
/*
function myFunction() {
  var x = document.getElementById("circle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/



function rotate(){
  var x=0;
  if(document.getElementById("circle").style.display === "block"){
      x = document.getElementById("circle");
    }
    else if(document.getElementById("rounded").style.display === "block"){
        x = document.getElementById("rounded");
    }
    else {
          x = document.getElementById("square");
    }
  var rotate="rotate("+Math.floor(Math.random()*180)+"deg)";
  x.style.transform=rotate;


}
