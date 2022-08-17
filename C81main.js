canvas=document.getElementById("ab_canvas");
ctx=canvas.getContext("2d");

color="black";
//line_info=2;
//circle_radius=20;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,10,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    lineWidth=document.getElementById("line_info").value;
    radius=document.getElementById("circle_radius").value;  
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    console.log(mouse_x+","+mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
ctx.stroke();
}

function clear_fu()
{
    ctx.clearRect(0,0,canvas.width,canvas.heigth);
}