var nombre = (prompt("Entrez votre mois en chiffre :"));

var daysInMonth;

if (nombre === 2) { // fevrier
    if (isLeapYear) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else if (nombre === 4 || nombre === 6 ||
    nombre === 9 || nombre === 11) {
    daysInMonth = 30;
} else if (nombre === 1 || nombre === 3 || nombre === 5  || nombre === 7 || nombre === 8 || nombre === 10 || nombre === 12) {
         daysInMonth = 31;
       } else {
         document.write(daysInMonth + " n'est pas pris en charge");
       }

   

// for (var i = 1; i < 13; i++) {
//     document.write(daysInMonth(i, 2018) + "<br />"));

// if (nombre >= 0) {
//   console.log(nombre + " n'est pas pris en charge");
// }
// 

var mois = parseInt(prompt("quel momis on est ?","saisis un chiffre entre 1 et 12"));

if (mois === 2){
    document.write("le mois n° " + mois + "a 28 jours");
}else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
    document.write("le mois n° " + mois + "a 30 jours");
} else if ((mois === 1  ) || (mois === 3  ) || (mois === 5  ) || (mois === 7  ) || (mois === 8  ) || (mois === 10 )  || (mois === 12 ) ){
    document.write("le mois n° " + mois + "a 31 jours");
}else{
    document.write("le mois n° " + mois + "est inconnu");
}