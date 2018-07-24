// var i = 1;
// for (i <= 1; i<=10; i++ ){
//     document.write("<br>" + "C'est le tour de manège n°" + i +"<br>");
// }

// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }
var input, parsedInput = 0;

do {
    input = prompt("entrez un chiffre valid", "1");
    parsedInput = parseInt(input);

} while (isNaN(parsedInput) || parsedInput < 1);
// erreur pour les chiffres negatifs

for (i = 1; i < parsedInput; i++) {
    document.write("<br>" + " <span class='red'> C'est votre tour de manège n° " + i + "<br></span>");
}


/* **************************** */

/*1 boucle FOR */
for (var i = 1; i <= 10; i++) {
    document.write("tour de manège n° " + i + "<hr>")
}
document.write("<hr>");

/*1 boucle WHILE*/
var manege = 0;

while (manege < 10) {
    manege++;
    document.write("tour de manège n° " + manege + "<br>");
}
document.write("<hr>");

/*2 boucle FOR */
var question = parseInt(prompt("Combien de tours t fais ?"));
for (var tour = 1; tour <= question; tour++) {
    document.write("tour de manège n° " + tour + "<br>");
}
document.write("<hr>");

/*2 boucle WHILE */
var combien = parseInt(prompt("Combien de tours ?"));
var compteur = 1;
while (compteur <= combien) {
    document.write("tu as fait " + compteur + "tours de manège<br>");
    compteur++;
}
document.write("<hr>");