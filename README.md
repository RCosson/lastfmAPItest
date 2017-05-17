# API last.fm

Ce projet a pour but de vous aider à utiliser une **API** facilement accessible.

![shema api last.fm](https://raw.githubusercontent.com/simplonco/api-lastfm/master/api.png)

Récupérer le projet
-------------

Vous allez d'abord _forker_ ce repo git.
Les forks vous permettent de créer une copie de ce repo sur votre propre compte.

Ensuite, clonez la version que vous avez sur votre compte en utilisant ssh.

```$ git clone git@github.com:VOTRE_COMPTE/api-lastfm.git ```

Attention : si cette commande ne fonctionne pas, vérifier de bien avoir votre clé ssh liée à votre compte github.

Créer son compte last.fm
-------------

Créez un compte sur last.fm. Scrollez vers le bas de votre profil, dans le footer il y a un [lien](http://www.last.fm/api) vers l'API.

Cliquez sur le lien [_Get an API account_](http://www.last.fm/api/account/create) sous _Getting started_.

Pour le moment on ne se soucie pas de l'url de callback ni d'application.
Mettez une url au hasard du moment qu'elle existe.

**Attention** : Copiez les données de votre app, surtout l'API\_key qui est indispensable pour consulter les données de l'API\_key.

Il ne vous reste plus qu'à faire appel à la méthode que vous voulez. 

Appel à l'API
-------------

En utilisant jQuery vous pouvez très simplement faire un appel à l'API en utilisant 

```
$.get("url des données que je cherche")
    .then( function (donnees) {
        // Ici j'utilise mes données
        console.log(donnees)
    });
```
Comment construire l'url de la méthode _Artist.search_ par exemple. Je vais sur la [page](http://www.last.fm/api/show/artist.search) qui décrit la méthode et récupère la construction de l'url. Je récupère mon API\_key et je la colle à l'emplacement de YOUR\_API_KEY

>http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
