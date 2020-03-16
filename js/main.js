// 1 definisco con una variabile lo square cliccato
// 2 richiamo l'url tramite una chiama ajax
// 3 definisco con una variabile il numero random api
// 4 definisco le condizioni
// 5 Se random <=5 lo square diventa giallo con visualizzazione del numeroRandom all'interno della casella
// 6 Se random >=6 lo square diventa verde con visualizzazione del numeroRandom all'interno della casella

$(document).ready(function(){
    $('.square').click(function(){
        var thisSquare = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (numeroRandom) {
                var random = numeroRandom.response;
                thisSquare.text(random);
                if (random <=5) {
                    thisSquare.addClass('yellow');
                } else if (random >=6) {
                    thisSquare.addClass('green');
                }
            },
            error: function () {
                alert('WARNING');
            },
        });
    });
});
