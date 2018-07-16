// alert('hi');

/* ========== 1 - les operateurs ======= */
/* ========== 2 - les écritures simplifiées ====== */


/* ========== 1 - les operateurs ======= */
// je déclare mes variables /constantes en debut de fichier
// je peux en declarer plusieurs à la volée : 
var nb1, nb2, resultat;

// j'affect des valeurs à certaines variables

nb1 = 10;
nb2 = 5;

/*  --- 1 - additionner avec '+' */
resultat = nb1 + nb2;
console.log(resultat);

/* ----2 - soustraire avec '-' */

resultat = nb1 - nb2;
console.log(resultat);

/* ----3 - Multiplier avec '*' */

resultat = nb1 * nb2;
console.log(resultat);

/* ----4 - diviser avec'/' */

resultat=nb1/nb2;
console.log(resultat);

/* ---5 - le reste d'une division avec le modulo '%' */

resultat = nb1%nb2;
console.log(resultat);

// je réaffecte un chiffre à nb1
nb1 = 11;
resultat = nb1%nb2;
console.log('le reste de la division de ' +nb1 + ' par ' +nb2 + 'est égal à : ' + resultat)

/* ========== 2 - les écritures simplifiées ====== */
var ex = 15;
ex = ex +5;
console.log(ex);

ex+= 5;
console.log(ex);

nb1 -= 5;
console.log(nb1);

/* var nb = 0;while (nb <= 100) {

   if (nb % 2 == 0) {

       console.log(nb + " est Paire");

   } else {

       console.log(nb + " est Impaire");

   }    nb++;

} */

/* ======== 3 - l'incrémentation et la décrémentation ==== */
var nb1= 1;
nb1 = nb1+1; //nb1 += 1

nb1++; //++ = +1
nb1+2; // +2 = +2

/* /!\ selon l'ordre le calcul n'est pas fait au même moment */

resultat_1 = --nb1;
resultat_2 = nb1--;
resultat_1 == resultat_2; // => true uniquement à la fin des calcules

/* 

-- nb1 => calcule tout de suite 
nb1-- => commence à la valeur de nb1 puis calcule
pareil avec ++
*/


