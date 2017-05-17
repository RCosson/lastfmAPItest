// J'appelle l'url qui va me renvoyer un JSON avec la méthode get de jquery
// l'url -> http://API_URL/API_VERSION/?method=METHOD&artist=ARTIST_NAME&api_key=API_KEY&format=json
for (var i = 0; i < 5; i++) {
  //$(artists)=["bob+marley", "john+lennon", "carpenter+brut"];
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=bob+marley&api_key=81b851def420eaf86acaeb639dcc1464&format=json')
        // Lorsque l'url renvoie le JSON elle exécute cette fonction de callback (rappel)
        .then(function (data) {

          // Affiche mes données
          // Je me ballade dans mon objet pour récupérér la biographie de mon artiste.
          //$('#bio').append(data.artist.bio.content);
          // appel de la photo de l'artiste
          var info = data.artist.bio.content;
          var url = data.artist.image[3]['#text'];
          var name = data.artist.name;
          //$('#title').append(name);
          $("body").append("<div class='content'><div id='imgContainer'><img id='img' src='" + url + "'/></div>" + "<div id='wrapper'><div id='title'>" + name + "</div>" + "<div id='bio'>" + info + "</div></div></div>");
        })
}
