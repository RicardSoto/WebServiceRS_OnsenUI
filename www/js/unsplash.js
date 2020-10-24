async function searchPhoto(query) {
    var accesKey = 'gpHLzCpPyWXsRksJx65shuOThfzd-wYmGiPWw7j8QV4';
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let response = await fetch("https://api.unsplash.com/search/photos?query=" + query + "&client_id=" + accesKey, requestOptions);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    console.log('Result', imagesList);

    const a = document.getElementById("contenedor");
    a.innerHTML = '';

    for (var each in imagesList) {
        var z = document.createElement("img");
        z.setAttribute("width", "150");
        z.setAttribute("height", "150");
        z.setAttribute("class", "center");
        z.setAttribute("id", "img");
        z.setAttribute("src", imagesList[each].urls.small);
        a.appendChild(z);

        var x =document.createElement("label");
        var t = document.createTextNode("Photo taked by: " + imagesList[each].user.name);
        x.setAttribute("class", "text");
        x.innerHTML="<br>";
        x.appendChild(t);
        a.appendChild(x);

        var separator = document.createElement("div");
        separator.setAttribute("class", "separador");
        a.appendChild(separator);
    }
}
