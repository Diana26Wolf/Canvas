mouse_event="empty"
var last_x, last_y;
var canvas= document.getElementById("Canvas");
ctx= canvas.getContext("2d")
pen_c= "black"
pen_w= 6
canvas.addEventListener("mousedown", mymouse_down);
function mymouse_down(e)
{
    console.log("draw_check")
    pen_c= document.getElementById("I1").value
    pen_w= document.getElementById("I2").value
    mouse_event="mouseDown"
    
}
canvas.addEventListener("mousemove", mymouse_move);
function mymouse_move(e){
    currentX= e.clientX - canvas.offsetLeft;
    currentY= e.clientY - canvas.offsetTop;
    console.log("draw")
if(mouse_event== "mouseDown"){
ctx.beginPath()
ctx.strokeStyle= pen_c
ctx.lineWidth= pen_w
ctx.moveTo(last_x, last_y) 
ctx.lineTo(currentX, currentY)
console.log("draw_line")
}
last_x=currentX
last_y=currentY
}