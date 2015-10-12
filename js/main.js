"use strict";
if (typeof config != Object) var config = new Config();
console.log(config);

var pseudocontroller_time = function(container, data) {
    data[config.controller_data[container]] = data;
    return data;
};


$(document).ready(function() {

    var get_type = function(url) {
        return (url.indexOf("http") >= 0) ? "jsonp" : "json";
    };

    var parse_tpl = function(element, obj) {

        var template = element.html();
        Mustache.parse(template);
        var div = document.createElement('div');
        div.setAttribute('id', element.attr("id"));
        div.setAttribute('class', element.attr("class"));
        div.innerHTML = Mustache.render(template, obj);
        element.replaceWith(div);

        //VISUAL EFFECTS
        //$('#' + element.attr("id")).css('background-color', '#' + Math.floor(Math.random() * 16777215).toString(16));
    };

    /** ********** ******** **/
    /** CONTAINERS AUTOLOAD **/
    /** ********** ******** **/

    $("[" + config.container_name + "]").each(function() {
        var container = $(this).attr("container");
        var container_elem = $(this);

        $.ajax({
            url: config.urls[container],
            dataType: get_type(config.urls[container]),

        }).done(function(data) {

            //console.log(data);

            parse_tpl(
                container_elem,
                pseudocontroller_time(container, data));

        });

    });

    /** *** ********** ******** **/
    /** END CONTAINERS AUTOLOAD **/
    /** *** ********** ******** **/
});
