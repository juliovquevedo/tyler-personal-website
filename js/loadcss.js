var url_var = window.location.search.substring(1);
var link = document.createElement("link");

if (url_var == "m") {
    link.href = "css/mobile.css";
} else {
    link.href= "css/desktop.css";
}

link.type = "text/css";
link.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(link);
