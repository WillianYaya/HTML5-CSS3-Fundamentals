function trocarImagem(){

	var imagem = document.getElementById('minhaImagem');

	if (imagem.src.match("imgs/ligada.gif")){

		imagem.src = "imgs/desligada.gif"
	} else {
		imagem.src = "imgs/ligada.gif"
	}
	imagem++;
}