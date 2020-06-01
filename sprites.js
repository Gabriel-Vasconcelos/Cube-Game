function sprites(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenhar = function(xCanvas, yCanvas){
		contexto.drawImage(img, this.x, this.y, this.largura, this.altura, this.xCanvas, this.yCanvas, this.largura, this.altura);

	}

}

var bg = new sprites(0, 0, 500, 444);