let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(111, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(290, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(245, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "goldenrod";
ctx.lineWidth = 2;
ctx.arc(155, 250, 40, 0, 2 * Math.PI);
ctx.stroke();


let mouseX, mouseY;

canvas.addEventListener("mousedown" , cliquei);

function cliquei(e){
mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

cor = document.getElementById("cor").value;
largura = document.getElementById("largura").value;

ctx.beginPath();
ctx.strokeStyle = cor;
ctx.lineWidth = largura;
ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
ctx.stroke();
}

function limpar() {
ctx.clearRect(0, 0,canvas.width, canvas.height);
}