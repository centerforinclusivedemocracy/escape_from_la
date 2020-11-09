$(document).ready(function () {    
    $.getJSON('la_precincts.geojson', function (data) {
        var items = [];
        $.each(data.features, function (key, val) {
            $.each(val.properties, function(i,j){
                items.push('<li id="' + i + '">' + j + '</li>');
            })              
        });
        $('<ul/>', {
            'class':'my-new-list',
            html:items.join('')
        }).appendTo('body');
    });
});