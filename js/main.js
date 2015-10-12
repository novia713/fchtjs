"use strict";
if (typeof config != Object) var config = new Config();
//console.log(config);

$(document).ready(function() {

    var get_type = function(url) {
        return (url.indexOf("http") >= 0) ? "jsonp" : "json";
    };


    $("[" + config.container_name + "]").each(function() {
        var container = $(this).attr("container");

        $.ajax({
            url: config.urls[container],
            dataType: get_type(config.urls[container]),

        }).done(function(data) {

            //console.log(data);

            var directives = {
                //gestión de links, porque el Transparency éste es una chusta :/
                link_posts: {
                        href: function(params){
                            return config.post_detail_file_name_for_link + "/" + this.id;
                        }
                },

                link_users: {
                        href: function(params){
                            return config.user_detail_file_name_for_link + "/" + this.id;
                        }
                }
            };

            $('.' + container).render( data, directives );


        });

    });

});
