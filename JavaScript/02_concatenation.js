alert('Hello!');
// 2 slashes pour commentaire sur une ligne

/*
commentaire 
sur plusieurs
lignes
*/

/* (shift + alt + a)
le DOM (document object model) est un programme interne au navigateur qui fait en sorte que :
    -chaque balise html
    -chaque attribut des balises (class id name ...)
    -chaque evenement (clic double-clic survol de la souris ..)
 deviennent des objet que l'on peut cibler, stocker dans une variable et manipuler
*/

/* 

1. L'objet WINDOW en js => le navigateur
    -alert('hello!'); est pareil que windows.alert ('hello!');
    -window est le seul objet du DOM qui peut s'utiliser implicitement (sans l'écrire)
2.l'objet DOCUMENT en js => la page html
    -document.getElementBy...
*/

/* ========= 1- Les variables ======= */


/* ========= 1- les variables ========= */
        /* ------ 1 - déclarer une variable */
var maVariable;

        /*  ------ 2 - affecter une valeur (stocker une valeur) */
maVariable = "fleur";

        /*-------- 3 - une instruction se termine toujours par un point-virgule (;) 
        mais je peux écrire plusieurs instructions sur la même ligne  */

        /* instruction_1;
        instruction_2; instruction_3; instruction_4; */

        /* ------- 4 - Afficher ma boite de dialogue */
window.alert('hello world');
alert('hello world');

        /* ------ 5 - afficher dans la console /!\ tres important pour le débuger son code */
console.log('layla');

        /* ------ 6 - afficher du texte dans la page web */
document.write('VLG 2018-19 adore le JavaScript !!')

        /* --------- 7 - demander une info à l'internaute */
window.prompt('on mange quand?');
prompt('on mange quoi?');

var mangeOu = window.prompt('on mange où?');
var mangerQuoi = prompt('on mange quoi?');
console.log(mangeOu);
console.log(mangerQuoi);

        /* ---- 8 - le js est sensible à la casse (case sensitive) */
/* maVariable =/= maVariable
monPrenom =/= mon_Prenom
mon_nom =/= mon-mon_nom

Ecriture camelCase
Ecriture snake_case */

        /* ---- 9 - une variable 
                    -ne peut pas commencer par un chiffre 
                    -ne doit pas contenir que les caractères alphanumériques (lettres et chiffres - pas de caractères spéciaux type accents ou & ou + par ex.)
                    -ne doit pas être un mot réservé (var, for ... des élément natifs du js)
                https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
                    */

        /* --- 10 - une variable peut être déclarée :
                - de façon explicite : var manger = "oui"
                - ou implicite quand = "13 heures"
        */

/* ========= 2- les types de données ====== */

        /* --- 1 - une chaine de caractères (string) */
var les_meilleurs = "VLG";  var les_meilleurs = 'VLG';
var les_meilleurs = "2018";  var les_meilleurs = '2018';
                                                                        /* j'ai pas capté les "" '' */
        /* --- 2 - un nombre entier (integer ou int) */
var les_meilleurs = 2018;

/* ---- 3 - un nombre décimal (float) */

var nb_a_virgule = -5.32;

/* 
/!\ s'écrit avec un point '.'
/!\ tous les nombres peuvent être soit positifs soit négatifs
*/

/* ----- 4 - un booléen (boolean) : vrai/faux (true/false) */
var vrai = true;
var faux = false;

/* --- 5 - un tableau (array) */
var gateau= ['farine', 'oeuf', 'chocolat', 4, true];

/* ---- 6 -un objet */
var voiture = {
    marque: 'Porsche',
    modele: 911,
    couleur: 'gris',
    vitesse: true,
    options: ['radio', 'ABS', 'freins', 4]
};

/* ========= 3- les constances ========= */

/* on declare une constante avec le mot clé CONST
ses particularités :
    -elle est accessible uniquement en lecture
    -donc une fois déclarée et une valeur affectée elle ne peut plus changer 
    -par convention on écrit son nom en majuscules
*/

const PAYS = "France";

/* ====== 4 - La concaténation ======== */

var annee = 2018;
var jo = 6;
var certificat_dev = "2019";

var calcul_1 = annee + jo;
document.write("<hr>" + calcul_1 + "<br>");

var calcul_2 = annee + certificat_dev;
console.log(calcul_2);
document.write("<hr>" + calcul_2 + "<br>");

/*  *********** EXO ************ */

var DebutPhrase = "Aujourd'hui ";
var NbStagiaires =  12 ; 
var SuitePhrase = " stagiaires ";
var FinPhrase = "sont présents. ";

// nous souhaitons afficheer la phrase en un seul morceau avec la concaténation => à vos claviers! /!\ attention aux espaces entre les mots

document.write("<hr>" + DebutPhrase + NbStagiaires + SuitePhrase + FinPhrase);
// document.write("<hr>" + DebutPhrase + NbStagiaires + " " + SuitePhrase + FinPhrase);


