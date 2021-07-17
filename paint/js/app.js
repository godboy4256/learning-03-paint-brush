const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll('.canvas_color')
const range = document.querySelector('#rangepen')
const save = document.querySelector('#save')
const mode = document.querySelector('#mode')



canvas.width = '1000';
canvas.height = '500';
ctx.lineWidth = 1;
ctx.strokeStyle = "#000";

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function colorChange(event){
 const cc = event.target.style.backgroundColor
 ctx.strokeStyle = cc
 ctx.fillStyle = cc
}

function rangeValue(){
   const strokeSize = this.value
   ctx.lineWidth = strokeSize
}

range.addEventListener('input',rangeValue)
Array.from(color).forEach(colors => 
   colors.addEventListener('click',colorChange)    
)

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0,'1000','500');
  }
}    


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


function eventX(event){
  event.preventDefault();
}
function savingImages(){
  const image = canvas.toDataURL();
  save.setAttribute('href',image)
}

canvas.addEventListener('click',handleCanvasClick)
canvas.addEventListener('mousemove',mouseMove)
canvas.addEventListener('mousedown',startPainting)
canvas.addEventListener('mouseup',stopPainting)
canvas.addEventListener('mouseleave',stopPainting)
canvas.addEventListener('contextmenu',eventX)
save.addEventListener('click',savingImages)