
var trun='x';

function removeAll(){
  for(var i=1;i<10;i++){
    document.getElementById("td"+i).innerText='';
  }
  trun='x';
}

function draw(event){
  if(event.target.innerText !=""){
    return;
  }
  if(trun === 'x'){
    event.target.innerText='x';
    trun='O'
  }
  else{
    trun='x';
    event.target.innerText='O';
  }
  checkWin();
}

function checkWin(){
  for(var j=0;j<7;j=j+3){
    var countRowX=0;
    var countRowY=0;
      for(var i=1;i<4;i++){
        if(document.getElementById("td"+(i+j)).innerText === 'x'){
          countRowX++;
        }
        else if(document.getElementById("td"+(i+j)).innerText === 'O'){
          countRowY++;
        }
      }
      if(countRowX === 3){
        alert("The X is winner");
        removeAll();
        return;
      }
      else if (countRowY === 3) {
        alert("The O is winner");
        removeAll();
        return;
      }
  }
  for(var i=1;i<4;i++){
    var countColumnX=0;
    var countColumnY=0;
    for(var j=0;j<7;j=j+3){
      if(document.getElementById("td"+(i+j)).innerText === 'x'){
        countColumnX++;
      }
      else if(document.getElementById("td"+(i+j)).innerText === 'O'){
        countColumnY++;
      }
    }
    if(countColumnX === 3){
      alert("The X is winner");
      removeAll();
      return;
    }
    else if (countColumnY === 3) {
      alert("The O is winner");
      removeAll();
      return;
    }
  }
  var countX1=0,countX2=0,countY1=0,countY2=0;
  for(var i=1,j=2;i<10;i=i+4,j=j-2){
    if(document.getElementById("td"+i).innerText === 'x'){
      countX1++;
    }
    else if(document.getElementById("td"+i).innerText === 'O'){
      countY1++;
    }
    if(document.getElementById("td"+(i+j)).innerText === 'x'){
      countX2++;
    }
    else if(document.getElementById("td"+(i+j)).innerText === 'O'){
      countY2++;
    }
  }
  if(countX1 === 3 || countX2===3){
    alert("The X is winner");
    removeAll();
  }
  else if (countY1 === 3 ||countY2===3) {
    alert("The O is winner");
    removeAll();
  }

}
