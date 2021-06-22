var p=document.getElementById("p1");
p.innerHTML="JS is working";
var flag=0;
var totMoves=0;
var time=0;
document.getElementById('start').style.pointerEvents = 'none';

function start(){
  document.getElementById("shfl").style.backgroundColor="cyan";
  document.getElementById("start").style.backgroundColor="cyan";
  document.getElementById("testing").innerHTML="Game has started now"
  flag=1;
  document.getElementById('start').style.pointerEvents = 'none';
 var y= checkboard();
 starttimer();
 
}
function starttimer(){
  time=0;
  document.getElementsByClassName("time")[0].innerHTML="time "+time;
}

setInterval(() => {
  if (flag==1 )time+=1;
  document.getElementsByClassName("time")[0].innerHTML="time "+time;
}, 1000);

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
  if (count==16) //game finished
  { alert("congo you won in "+totMoves+" moves in "+time+" seconds");
  document.getElementsByClassName("time")[0].innerHTML="time 0"; 
  document.getElementsByClassName("moves")[0].innerHTML="moves 0";
  document.getElementById("testing").innerHTML="Great !! you won , try again to improve yourscore";
  document.getElementById("shfl").style.backgroundColor="#00DD00";
  board();
  time=0;totMoves=0; flag=0;
  }
}



function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }

function clickTile(row,column) {
  if(flag==1) totMoves+=1;
  if (flag==1) var x=checkboard(); 
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  document.getElementsByClassName("moves")[0].innerHTML="moves "+totMoves;

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

function shuffle(){
  flag=0;
  totMoves=0;
  document.getElementById('start').style.pointerEvents = 'auto';
  document.getElementById("shfl").style.backgroundColor="orange";
  document.getElementById("testing").innerHTML="click start to play";
  document.getElementById("start").style.backgroundColor="#00DD00";
  var d=parseInt(prompt("Please enter difficulty \n 1,low,less than 50 moves \n2,medium,less than 100 moves\n3,hard,less than 150 moves\nyou may enter even larger number if you want ;)","1 , 2 or 3",));
  for(i=0;i<200*d;i++)
  {
   
    var tilerow = Math.floor(Math.random()*4+1);
    var tilecol = Math.floor(Math.random()*4+1);
    
    clickTile(tilerow,tilecol);
    //window.alert("shuffled");
  }
 }

 function board(){
   var pboard=document.getElementById("board");
   var prev=pboard.value;
   prev=prev+("\nMoves - "+totMoves+" , Time - "+time);
   pboard.value=prev;
 }


  
