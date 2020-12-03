/* -------------------------------------------------------------------------------

Lien vers API Deezer pour la recherche d'album pour un artiste
→ http://api.deezer.com/search/album?q=nomArtiste

TODO input + bouton pour afficher liste album d'un artiste saisi par utilisateur

------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------
                                            Modèle de carte HTML BOOTSTRAP

<div class="row"></div> //TODO ne PAS oublier d'englober tout ce qui suit dans cette div !!

  1- //TODO format desktop/laptop → 4 cards par ligne
  2- //TODO format tablette       → 2 cards par ligne
  3- //TODO format smartphone     → 1 card par ligne

<div class="col">
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">  //TODO changer la src de l'image → data[x].album.cover_medium
    <div class="card-body">
      <h5 class="card-title">Card title</h5> //TODO changer ce titre dynamiquement → 'data[x].album.title'
      <a href="#">Tracklist</a> //TODO changer HREF par lien vers album sur deezer → 'https://www.deezer.com/fr/album/' + data[x].album.id;
      <ul> //TODO écrire les titres → '<li>http://api.deezer.com/album/' + data[x].album.id + '/tracks' + .data[y].title + '</li>'
      </ul>
      <figure>
      <figcaption>Vous écoutez XXX</figcaption> //TODO XXX = titre du track → data[x].title
      <audio
          controls
          src=""> //TODO src = data[x].preview
              Votre navigateur ne supporte pas l'élément
              <code>audio</code>.
      </audio>
  </figure>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

------------------------------------------------------------------------------- */
const albumList = document.querySelector('.album-list');

// exo-1 => faire une branch 'get-title'
// Accéder et Lister les titres de chaque albums dans la console du navigateur;
// Afficher cette liste dans votre page HTML (dans la balise 'ul').

data.forEach(
    titres => console.log(titres.title)
    );
