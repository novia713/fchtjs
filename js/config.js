'use strict';

function Config() {
    this.get_last_param = function() {
            // el nid debe ser el último tramo en la URL
            return window.location.toString().split("/").pop();
        },
        this.container_name = "container",
        this.path = "/gaseosa/fwjsfetch/",
        this.development = true,
        this.production = false,
        this.nid = (this.get_last_param() > 0) ? this.get_last_param() : "",
        this.urls = {
            "uno": "http://jsonplaceholder.typicode.com" + "/posts",
            "dos": "http://jsonplaceholder.typicode.com" + "/users",
            "detalle-post": "http://jsonplaceholder.typicode.com" + "/posts/" + this.get_last_param(), //TODO: gestión de errores si el último param no es numérico
            "detalle-user": "http://jsonplaceholder.typicode.com" + "/users/" + this.get_last_param()
        },
        this.controller_data = {
            "uno": "a_elems",
            "dos": "b_elems",
        }
};

//console.log("estamos en " + (config.development)? "DESARROLLO" : "PRODUCCION");
