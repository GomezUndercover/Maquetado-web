var pckgWidth
var pckgHeight
var packLength
var srcZipCode
var destZipCode
var packageService
var recipientName
var senderName
var address
var cellphone
var email
var reference

function saveSendDetails() {
    pckgWidth = $('#dimension-width').val()
    pckgHeight = $('#dimension-height').val()
    packLength = $('#dimension-length').val()
    srcZipCode = $('#detail-origin-zipcode').val()
    destZipCode = $('#detail-destination-zipcode').val()
    packageService = $('#selector').val()
    recipientName = $('#recipient').val()
    senderName = $('#sender').val()
    address = $('#address').val()
    cellphone = $('#cellphone_number').val()
    email = $('#email').val()
    reference = $('#reference').val() || "n/a"
}

function generateSummary() {
    let summary = `
        <h4>Shipping Summary</h3>
        <p><strong>Nombre de remitente:</strong> ${senderName}</p>
        <p><strong>Nombre de destinario:</strong> ${recipientName}</p>
        <p><strong>Codigo postal de origen:</strong> ${srcZipCode}</p>
        <p><strong>Código postal de destino</strong> ${destZipCode}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Número telefónico:</strong> ${cellphone}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Dimensiones de paquete (W x H x L):</strong> ${pckgWidth} x ${pckgHeight} x ${packLength}</p>
        <p><strong>Servicio:</strong> ${packageService}</p>
        <p><strong>Referencia:</strong> ${reference}</p>`

    // se agrega el div creado a la seccion y se activa boton de enviar
    let summaryDiv = $('<div>').attr('id', 'summaryDiv').html(summary)
    $('#main-section').append(summaryDiv).css('margin-left', '15px')
    $('#summaryDiv p').css({
        'margin-left': '30px'
    })
}


$(function () {
    $("#accordion").accordion({
        collapsible: true
    })

    // mostrar opciones al seleccionar opcion de envio
    $('#selector').on('change', function () {
        const selectedValue = $(this).val()
        $('#list ul').hide()
        if (selectedValue) {
            $(`#${selectedValue}`).show()
        }
    });

    // enlazar metodo con boton de confirmar
    $('#confirm-details').on('click', function () {
        saveSendDetails()
        generateSummary()
        // desabilitar boton de confirmar
        // ya no me dio tiempo de agregar buenas condicionales para que se vea mas bonito el codigo
        $('#confirm-details').prop('disabled', true)

        $('#send-package').show()
    });

    $('#send-package').on('click', function () {
        window.location.href = 'package_sent.html';
    })

})