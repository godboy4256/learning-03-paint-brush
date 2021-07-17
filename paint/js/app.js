const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll('.canvas_color')
const range = document.querySelector('#rangepen')


console.log(color)
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

function colorChange(){
 const cc = this.style.backgroundColor
 ctx.strokeStyle = cc
}

function rangeValue(){
   const strokeSize = this.value
   ctx.lineWidth = strokeSize
}

range.addEventListener('input',rangeValue)

Array.from(color).forEach(colors => 
   colors.addEventListener('click',colorChange)    
)
    

function mouseMove(event){
    const xget = event.offsetX
    const yget = event.offsetY
    if(!painting){  
     ctx.beginPath(); // 생성
     ctx.moveTo(xget,yget) // 시작
    }else{
     ctx.lineTo(xget,yget) // 끝
     ctx.stroke() // 어떤 걸로? 선
    }
}

canvas.addEventListener('mousemove',mouseMove)
canvas.addEventListener('mousedown',startPainting)
canvas.addEventListener('mouseup',stopPainting)
canvas.addEventListener('mouseleave',stopPainting)