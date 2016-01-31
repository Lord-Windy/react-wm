<script type="text/javascript">
var context;
var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw(){
	context= myCanvas.getContext('2d');
	context.clearRect(0,0,300,300);
	context.beginPath();
	context.fillStyle="#0000ff";
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>300)
	dx=-dx;
	if( y<0 || y>300)
		dy=-dy;
		x+=dx;
		y+=dy;
	}
setInterval(draw,10);
</script>

<!DOCTYPE html>

<html>

<body>
<div id="container">
	<canvas id="myCanvas" width="300" height="300"></canvas>
</div>
</body>
</html>
