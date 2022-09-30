function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento.localName === 'audio' && elemento != null) {
        elemento.play();

    } else {        
        console.log('Elemento não encotrado ou seletor inválido') ;
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio); 
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.which === 13) {
        tecla.classList.add('ativa');
        }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}   
}