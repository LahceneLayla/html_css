/* 1- le et : && ou and */
/* 2- le ou : || ou or  */
/* 3 - le ! (contrair de) */

/* 1- le et : && ou and */

/* =>si je cumule plusieurs conditions */
var prenom = 'layla';
var prenomlog = prompt('prenom');
var mdp = 123;
var mdplog = parseInt(prompt('mdp ?'));

if( (prenom === prenomlog) && (mdp === mdplog) ){
    // code si tout est vrai
}

/* table des && */
/* 
if (a && b) {...}

=> si a est faux et b est vrai => faux
=> si a est vrai et b est faux => faux
=> si a est faux et b est faux => faux
=> si a est vrai et b est vrai => vrai

*/

/* 2 - le ou : || ou or  */

/* 
=> si au moins une condition est vraie

table des || 
=> si a est faux et b est vrai => vrai
=> si a est vrai et b est faux => vrai
=> si a est faux et b est faux => faux
=> si a est vrai et b est vrai => vrai

*/

/*  */

/* 3 - le ! (contrair de) */
var userlog = true;
if (userlog == false){
    /* ...code si user non loggé */}
    if(!userlog){
// code si utilisateur non loggé
    }
