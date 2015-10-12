'use strict';

function Config() {
    this.get_last_param = function() {
            // el nid debe ser el último tramo en la URL
            return window.location.toString().split("/").pop();
        },
        this.container_name = "container",
        this.path = "/fchtjs/",
        this.development = true,
        this.production = false,
        this.nid = (this.get_last_param() > 0) ? this.get_last_param() : "",
        this.url_api_server = "http://jsonplaceholder.typicode.com",
        this.urls = {
            "uno":  this.url_api_server + "/posts",
            "dos":  this.url_api_server + "/users",
            "detalle-post": this.url_api_server + "/posts/" + this.get_last_param(), //TODO: gestión de errores si el último param no es numérico
            "detalle-user": this.url_api_server + "/users/" + this.get_last_param()
        },
        this.post_detail_file_name_for_link = "post",
        this.user_detail_file_name_for_link = "user"
};

//console.log("estamos en " + (config.development)? "DESARROLLO" : "PRODUCCION");
