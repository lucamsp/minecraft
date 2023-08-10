var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(blockImageWidth);
	block_image_object.scaleToHeight(blockImageHeight);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80')
	{
		console.log("p e shift pressionadas juntas");
		blockImageWidth = blockImageWidth + 10;
		blockImageHeight = blockImageHeight + 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}
	if(e.shiftKey && keyPressed == '77')
	{
		console.log("m e shift pressionadas juntas");
		blockImageWidth = blockImageWidth - 10;
		blockImageHeight = blockImageHeight - 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}
	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		newImage('parede.jpg');
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('grama.png');
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('verde_claro.png');
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('madeira_tronco.jpg');
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('telhado.jpg');
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('parede_amarela.png');
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('verde_escuro.png');
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unico.png');
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('nuvem.jpg');
		console.log("c");
	}
}
