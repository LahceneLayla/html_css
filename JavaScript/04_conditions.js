//alert ('test');

/* -- 1 - structure de base IF */
/* -- 2 - structure de base ELSE */
/* -- 3 - structure de base ELSE IF ... ELSE  */

/* -- 1 - structure de base IF */
if (true) { //par défaut le if vérifie si la condition est vraie (true)
    /* .....code ..... */
}

var nb1 = 99;
if (nb1 <100) {
    console.log(nb1 + " est plus petit que 100");
}
/* -- 2 - structure de base ELSE */
if (true) {
  //par défaut le if vérifie si la condition est vraie (true)
  /* .....code si condition est vraie ..... */
}
else{
      /* code si condition est vraie */
    }

    var nb2 = 399;
    if (nb2 > 200) {
        console.log(nb2 + ' est plus grand que 200');
    } else {
        console.log(nb2 + " est plus petit que 200");
    }

/* -- 3 - structure de base ELSE IF ... ELSE */
if (true) {
    //par défaut le if vérifie si la condition est vraie (true)
    /* .....code si condition 1 vraie ..... */
}
else if (true) {
    /* code si condition 1 est vraie */
}
 else {
    /* .....code si les conditions 1 et 2 sont fausses */
    // console.log(nb2 + " est plus petit que 200");
}

var nb4 = 50;
if(nb4 < 50) {
    console.log(nb4 + ' plus petit que 50');
} else if (nb4 >50) {
    console.log(nb4 + " plus grand que 50");
} else {
    console.log(nb4 + ' est égal à 50');
}
