$(document).ready(function () {
   // var marvelAPI = 'http://gateway.marvel.com/v1/public/characters';
    var ts = new Date().getTime();
    var PRIV_KEY = '2183109a47a13c37e86934ab9867e747b729a115';
    var PUBLIC_KEY = '8ca0518c7fafefd3f0dc5eee818d10e1';
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    
    $.getJSON( 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&orderBy=name&limit=100', {
        //ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash
    })

    .done(function( response ) {
        var results = response.data.results;
        var resultsLen = results.length;
        for(var i=0; i<resultsLen; i++){
            if(results[i].name.length > 0) {
                var output = '<option value = "' + i + '">' + results[i].name + '</option>';
                $('#resultado').append(output);
            }
            
        }
        
        
        $("#resultado").change(function(){
            // Aqui você tem o value selecionado assim que o usuário muda o option
            var idHeroi = jQuery(this).val();
            var dados = '<div class="added"><p><img src=" ' + results[idHeroi].thumbnail.path + '.' +results[idHeroi].thumbnail.extension + '"></p><P>'+ results[idHeroi].name +'</p><p>'+ results[idHeroi].description +'</p></div>';
            $('.added').remove();
            $('#dadosHeroi').append(dados)
        });
    });
});