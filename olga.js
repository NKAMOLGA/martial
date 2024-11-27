var touches = document.querySelectorAll('button');
var afficher = document.querySelector('.message');
var suppression = document.querySelector('.supprimer');
var egals = document.querySelector('.egals');
function affichage(value) {
    var message = afficher.innerText;
    afficher.innerText = message + value;
    return afficher.innerText;
}
function delSaisie() {
    afficher.innerText = "";
}
function delResultat() {
    afficher.innerText = "";
}
egals.addEventListener('click', function () {
    var cste = eval(afficher.innerText);
    afficher.innerText = cste;
});
var _loop_1 = function (i) {
    touches[i].addEventListener('click', function () {
        affichage(touches[i].innerText);
    });
};
for (var i = 0; i < touches.length; i++) {
    _loop_1(i);
}
