var cardDeck = document.getElementsByClassName('card-deck')[0];
var data = [{ img: "https://images.unsplash.com/photo-1445346366695-5bf62de05412?auto=format&fit=crop&w=886&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", title: "Carte de Simplon", para: "Wallah je comprends mieux le .map", smallText: "T'as pigé ?" }, { img: "https://images.unsplash.com/photo-1490323948794-cc6dde6e8f5b?auto=format&fit=crop&w=726&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", title: "Ma carte", para: "Wallah je comprends mieux Bootstrap", smallText: "Capich ?" }];

cardDeck.innerHTML += data.map(function (el, index, arr) {
    return "<div class='card'><img class='card-img-top' src=" + el.img + " alt='Card image cap'><div class='card-body'><h4 class='card-title' > " + el.title + "</h4 ><p class='card-text' > " + el.para + "</p ><p class='card-text' > <small class='text-muted'>" + el.smallText + "</small></p ></div ></div >"
})
