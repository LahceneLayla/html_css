/* 
les objets
 */
var contacts = {
//  indice : valeur
"prenom": "layla",
"nom": "lahcene",
"yeux": "marron",
};

console.log(contacts);
// pour cibler une valeur dans l'objet je l'appele avec son indice 
console.log(contacts.prenom);

// pour avoir plusieurs je stock dans un tableau
var vlg18 = [
    "layla", "luc", "jp",
    {
        // "indice" : valeur
        "prenom":"layla",
        "yeux": "marron"
    },
    {
        "prenom": "luc",
        "yeux": "vert",
    },
     {
        "prenom": "jp",
        "yeux":"bleu",
    },
];
/* 
       ^___^
\___  (=°W°=) meow!!!!!!!
    \ (||  ||)
     \(##  ##)

    */
console.log(vlg18);
console.log(vlg18[4].yeux);

var nbvlg2018 = vlg18.length;
console.log('nombre damis vlg 2018 : ' + nbvlg2018);

// parcourir un tableau
var dejeuner = ['salade', 'tomates', 'oignons', 'pain', 'poulet'];
console.log[dejeuner[6]];
console.log(dejeuner);

for (menu = 0; menu < dejeuner.length; menu++){
    console.log("Aliment n° "+ menu);
    console.log(dejeuner[menu]);
    console.log('*-*-*');
}

/* __
      \     _____
       \   ( °  ° )
        \   _____
         \___| |__
          |       |
          (       )
           \     /|
            \   / |
            |   | |___ 
           /  /\ \
          /  /  \ \
         |  |    | |
         |  |    | |
         |  |    | |
         |  |    | |
       __|__|  __|_|

       */

var stagiaires = [
    {
        "prenom": "Elies",
        "code": "JavaScript"
    },
    {
        "prenom": "Mohamed",
        "code": "Html"
    },
    {
        "prenom": "Jhordan",
        "code": "Css"
    },
    {
        "prenom": "Alpha",
        "code": "Video"
    },
    {
        "prenom": "Jean-Philippe",
        "code": "Css"
    },
    {
        "prenom": "Luc",
        "code": "POO"
    },
    {
        "prenom": "Layla",
        "code": "PHP"
    },
    {
        "prenom": "Sabuj",
        "code": "Angular"
    },
    {
        "prenom": "Arnaud",
        "code": "Symfony"
    },];
for (perso = 0; perso < stagiaires.length; perso++) {
    console.log("stagiaire n° " + perso);
  console.log(stagiaires[perso].prenom);
    console.log("adore " + stagiaires[perso].code);
  console.log("-----");
}