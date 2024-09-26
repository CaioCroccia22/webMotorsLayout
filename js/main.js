$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
});
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        // No plugin letras são implementadas através do: 'S'
        placeholder: 'Digite o telefone celular'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(event, validador) {
            let camposincorretos = validador.numberOfInvalids();
            if (camposincorretos){
                alert(`Os campos ${camposincorretos} não estão preenchidos`);
                console.log(camposincorretos);
            }
        }
    })

    $('.auto-list button').click(function() {
        const destiny = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
})