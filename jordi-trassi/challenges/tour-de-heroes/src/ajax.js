
function makeRequest() {

    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot creat an XMLHTTP instance');
        return false;
    }

        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (event) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (event) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send();

}

function alertContents() {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            alert(http_request.responseText);
        } else {
            alert('Hubo problemas con la petición.');
        }
    }

}



// { <span>
//     style="cursor: pointer; text-decoration: underline"
//     onclick="makeRequest('test.html')">
//         Hacer una petición
// </span> }