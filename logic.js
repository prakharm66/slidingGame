var p=document.getElementById("p1");
p.innerHTML="JS is working";

const Cells=new Array [16];

for (i=0;i<16;i++){
    Cells[i]=document.getElementById("cell"+(i/4)+(i%4)+11);
    document.getElementById("cell11").innerHTML="TT";
}

document.getElementById("cell11").style.color="red";