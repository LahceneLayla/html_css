/* la boucle for */
/* la boucle while */

/* la boucle for */

    for (var i = 1; i<= 10; i+=2){
        document.write("<h2>instruction repetee : " +i+ '</h2>');
    }

/*  => syntaxe : 3 arguments

1-initialie un compteur à parti de combien je comte (par défaut la variable est 'i'
2-la condition a verifier
3- le pas d'incrementation (généralement +1 a chaque tour ou i++)

tant que (compteur; condition_true; incrementation){
   
}*/
 /* ........code......... */

/* la boucle while */

    var j = 1;
    while (j <= 10){

    document.write("<h2>instruction repetee : " + i + '</h2>');
    j++; // j=j+1; ou j+=1;
    }

/* syntaxe

compteur;
tant (condition_true){
    //  -------instruction repetee----- 
    incrementation;
}

*/



/* -------------------------------

           EXERCICE

j'ai 1000€ sur mon compte

chaque mois j'ajoute 50€

combien de temps me faut-il pour avoir 2000€ sur mon compte ?

-------------------------------- */
// var g = 1000;
// var addg = 50;
// for (g = 1000; g > 2000; i+50) {
//   text += Mois[g] + "<br>";
// } 
                    var i = 1000;
                    do{
                        i+=50;
                        console.log(i);
                    }while(i<2000);


// var n = 1000;
// var i = 50;
// while (n < 2000){
//    console.log(i);
// }


// boucle while
var moncompte = 1000;
var temps = 0; // compteur de boucle

while(moncompte < 2000){
moncompte += 50; //moncompte = moncompte + 50
temps++; //si je l'oublie boucle infinie
}

document.write("<h2>fortune sur mon compte : " +moncompte+ "</h2>");
document.write("<h2>j'aurais 2000 € dans : " + temps + "mois</h2>");

// boucle for

var tps =0;



// for(var i =  1000; i <= 2000; i+=50){
//     var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
//     document.write("<h2>fortune sur mon compte : " + i + "</h2>");
//     tps++;
//      document.write("fortune sur mon compte pour le mois de " + tab_mois[ladate.getMonth()] + ":" +i);
// }
// document.write("<h2>j'aurais 2000 € dans : " + tps + "mois</h2>");

// for (var i = 1000; i <= 2000; i += 50) {
//   if (tab_mois[i] == 1) tab_mois.push(2000);
//   console.log(tab_mois[i]);
// }


/* Afficher un select qui va de 1900 a 2020 */

// document.write("<select>");
// document.write("<option>1900</option>"); 
// document.write("<option> 1901</option>"); 
// document.write("<option> ....</option>"); 
// document.write("<option> 2020</option>"); 
// document.write("</select>");

document.write("<hr>");

document.write("<select>");

for (var i = 1900; i <= 2020; i++) {

    document.write("<option>" + i + "</option>");

}

document.write("</select>");