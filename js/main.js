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
