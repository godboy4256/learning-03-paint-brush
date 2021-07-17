const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = '1000';
canvas.height = '500';
ctx.lineWidth = 1;
ctx.strokeStyle = "#000";

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function mouseMove(event){
    const xget = event.offsetX
    const yget = event.offsetY
    if(!painting){  
     ctx.beginPath();
     ctx.moveTo(xget,yget);
    }else{
     ctx.lineTo(xget,yget);
     ctx.stroke();
    }
}

canvas.addEventListener('mousemove',mouseMove)
canvas.addEventListener('mousedown',startPainting)
canvas.addEventListener('mouseup',stopPainting)