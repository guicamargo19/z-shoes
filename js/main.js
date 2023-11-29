$(document).ready(function() {

    $("#carrossel-imagens").slick({
        autoplay: true
    })

    $("#carrossel-imagens2").slick({
        autoplay: true
    })

    $("#carrossel-imagens3").slick({
        autoplay: true
    })

    $("#carrossel-imagens4").slick({
        autoplay: true
    })

    $("#carrossel-imagens5").slick({
        autoplay: true
    })

    $("#carrossel-imagens6").slick({
        autoplay: true
    })

    $('.menu').click(function(){
        $('nav').slideToggle();
    })

    $('.container li>a').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: false,
            },
            telefone: {
                required: true,
            },
            cep: {
                required: true,
            },
            cpf: {
                required: true,
            },
            viagemInteresse: {
                required: true,
            },
            mensagem: {
                required: false,
            }
            
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            telefone: 'Por favor, digite um telefone',
            cep: 'Por favor, digite seu CEP',
            cpf: 'Por favor, digite seu CPF',
            telefone: 'Por favor, digite seu telefone',
            viagemInteresse: 'Por favor, informe qual destino tem interesse',
        },
        
        submitHandler: function(){
            $('.mensagem-enviada').slideToggle()
            $('#nome').val('')
            $('#telefone').val('')
            $('#email').val('')
            $('#cep').val('')
            $('#cpf').val('')
            $('#viagemInteresse').val('')
            $('#mensagem').val('')
        }
    })

    $('.lista-locais button').click(function() {
        const destino = $('#contato')

        const viagemDestino = $(this).parent().find('h3').text()

        $('#viagemInteresse').val(viagemDestino)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

    })
})