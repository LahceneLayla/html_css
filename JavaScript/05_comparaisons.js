/* comparaisons */
/*  1 -comparer la valeur */
/*  2- comparer la valeur et le type */
/*  3 - verifier que 2 valeurs sont differentes ... en valelur */
/*  4 - verifier que 2 valeurs sont differentes ... en valelur et en type */


/*  1 -comparer la valeur */
// => le signe == signifie 'égal" Rappel : le = c'est de l'affectation (stockage de données dans une variable)
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); // => true

/*  2- comparer la valeur et le type */
var nb1 = 123;
var nb2 = "123";
console.log(nb1 === nb2); // => false

/*  3 - verifier que 2 valeurs sont differentes ... en valelur */
// le signe != 
console.log(nb1 != nb2); // => false

/*  4 - verifier que 2 valeurs sont differentes ... en valelur et en type */
// le signe !==
console.log(nb1 !== nb2); // => true

/* -------------------------------

           EXERCICE :

J'arrive sur un Espace Sécurisé au moyen du prénom et d'un mot de passe.

Je doit saisir mon prénom et mdp pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et mdp).

En cas d'échec une alerte m'informe du problème.

Si tout se passe bien, un message de bienvenue m'accueille.

-------------------------------- */

// alert('bonjour bienvenu dans lEspace Sécurisé au moyen du prénom et dun mot de passe');

// var mdp = window.prompt(
//   "Je doit saisir mon prénom et mdp pour être authentifié sur le site"
// );

// console.log(mdp);

/*                             var prenom = 'Layla';
                            var mdp = 'Layla';

                            var check = function () {
                                if (document.getElementById('prenom').value ==
                                    document.getElementById('mdp').value) {
                                    document.getElementById('message').style.color = 'green';
                                    document.getElementById('message').innerHTML = 'matching';
                                } else {
                                    document.getElementById('message').style.color = 'red';
                                    document.getElementById('message').innerHTML = 'not matching';
                                }
                            } */


var prenom = 'layla';
var mdp = 123;

var prenomlog = prompt('entrez votre prenom');
if (prenom === prenomlog){
            // si tout est ok je continue avec le mdp
        var mdplog = parseInt(prompt('ton mot de passe'));
        if(mdp === mdplog){
            alert('welcome');
        }else{
            alert('ereur mot de passe');
        }
}else {
    alert('cest pas bon');
    }
