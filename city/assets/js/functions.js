jQuery(function ($) {
    "use strict";
    //Contacto seguro de casa
    $("#submit_btn_reserva").click(function () {
        //get input field values
        var user_name = $('input[name=NombreReserva]').val();
        var user_email = $('input[name=emailReserva]').val();
        var user_telefono = $('input[name=telefonoReserva]').val();
        var user_fecha_inicio = $('input[name=FechaInicioR]').val();
        var user_fecha_fin = $('input[name=FechaFinR]').val();
        var e = document.getElementById("adultos");
        var user_cant_adultos = e.options[e.selectedIndex].value;
        var e = document.getElementById("children");
        var user_cant_ninios = e.options[e.selectedIndex].value;
        var e = document.getElementById("infants");
        var user_cant_bebes = e.options[e.selectedIndex].value;
        var user_comentarios = $('input[name=ComentariosR]').val();

        //simple validation at client's end
        var post_data, output;
        var proceed = true;
        if (user_name == "") {
            proceed = false;
        }
        if (user_email == "") {
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userTelefono': user_telefono,
                'userFechaInicio': user_fecha_inicio,
                'userFechaFin': user_fecha_fin,
                'userCantAdultos': user_cant_adultos,
                'userCantNinios': user_cant_ninios,
                'userCantBebes': user_cant_bebes,
                'userComentarios': user_comentarios
            };

            //Ajax post data to server
            $.post('contact-reserva.php', post_data, function (response) {

                //load json data from server and output message
                if (response.type == 'error') {
                    output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
                } else {
                    output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                    //reset values in all input fields
                    $('.callus input').val('');
                    $('.callus textarea').val('');
                }

                $("#result-reserva").hide().html(output).slideDown();
            }, 'json');

        }
    });

    //Contact Us
    $("#submit_btn_contact").click(function () {
        //get input field values
        var user_name = $('input[name=namecontact]').val();
        var user_email = $('input[name=emailcontact]').val();
        var user_subject = $('input[name=subjectcontact]').val();
        var user_message = $('textarea[name=messagecontact]').val();

        //simple validation at client's end
        var post_data, output;
        var proceed = true;
        if (user_name == "") {
            proceed = false;
        }
        if (user_email == "") {
            proceed = false;
        }
        if (user_subject == "") {
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userSubject': user_subject,
                'userMessage': user_message
            };

            //Ajax post data to server
            $.post('contact.php', post_data, function (response) {

                //load json data from server and output message
                if (response.type == 'error') {
                    output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
                } else {
                    output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                    //reset values in all input fields
                    $('.callus input').val('');
                    $('.callus textarea').val('');
                }

                $("#result").hide().html(output).slideDown();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $(".callus input, .callus textarea").keyup(function () {
        $("#result").slideUp();
    });
});