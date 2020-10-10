


function showState() {

    $('select').change(function () {
        var stateSelected = $("option.estado:selected", this).val();
        var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + stateSelected + '/municipios';

        $.ajax({
            url: url,
            success: function (data) {
                $.each(data, function (key, val) {
                    console.log(val.nome)

                    $('#cidades').append(
                        '<option>' + val.nome + '</option>'
                    )
                })
            },
            beforeSend: function () {
                $('.loader').css('display', 'block');
            },
            complete: function () {
                $('.loader').css('display', 'none');
            }
        });

    });
}


showState()