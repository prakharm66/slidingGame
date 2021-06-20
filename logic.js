var p=document.getElementById("p1");
p.innerHTML="JS is working";
var flag=0;

function start(){
  document.getElementById("testing").innerHTML="Game has started now"
  flag=1;
 var y= checkboard();
}

const Correct=[]
for (i=0;i<4;i++){
  for (j=0;j<4;j++){
    var num=4*i+j+1;
    Correct[4*i+j]="cell tile"+num;
  }
}

function checktile(tileid){
  
  var tile = document.getElementById(tileid);
  var row=tileid[tileid.length-2];
  var col=tileid[tileid.length-1];
  var idToTile=4*(row-1)+parseInt(col);
  var idclass="cell tile"+idToTile;

  if (idclass==tile.className)
  {
    document.getElementById(tileid).style.borderColor="green";
    return 1;
  }else 
   { document.getElementById(tileid).style.borderColor="red";
    return 0;} 
  
}

function checkboard()
{ var count=0;
  for (i=1;i<5;i++)
  {
    for (j=1;j<5;j++)
    {
     count+= checktile("cell"+i+j);
    }
  }
  if (count==16) alert("congo you won")
}



function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }

function clickTile(row,column) {
  if (flag==1) var x=checkboard(); 
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="cell tile16") { 

     //Checking if white tile on the right
      if (column<4) {
        if ( document.getElementById("cell"+row+(column+1)).className=="cell tile16") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
        }
      }
      //Checking if white tile on the left
      if (column>1) {
        if ( document.getElementById("cell"+row+(column-1)).className=="cell tile16") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
        }
      }
      //Checking if white tile is above
       if (row>1) {
        if ( document.getElementById("cell"+(row-1)+column).className=="cell tile16") {
          swapTiles("cell"+row+column,"cell"+(row-1)+column);
          return;
         }
       }
       //Checking if white tile is below
       if (row<4) {
         if ( document.getElementById("cell"+(row+1)+column).className=="cell tile16") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
          }
        }
       
    }
         
}

function s(){
  flag=0;
  document.getElementById("testing").innerHTML="click start to play";
  var d=parseInt(prompt("Please enter difficulty \n 1,low,less than 50 moves \n2,medium,less than 100 moves\n3,hard,less than 150 moves\nyou may enter even larger number if you want ;)","1 , 2 or 3",));
  for(i=0;i<50*d;i++)
  {
   
    var tilerow = Math.floor(Math.random()*4+1);
    var tilecol = Math.floor(Math.random()*4+1);
    
    clickTile(tilerow,tilecol);
    //window.alert("shuffled");
  }
 }
  
