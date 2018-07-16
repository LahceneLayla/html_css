/* window.alert('Bonjour!');

var prixHT = window.prompt("quel est votre prix HT?");
console.log(prixHT);

var tva= 20/100;

var prixTTC= resultat;

var resultat = prixHT * (1 + (tva));
alert(resultat);
console.log(prixTTC);
document.write('votre prix ' + resultat); */

/*  [Montant HT] x (1 + ([Taux TVA] / 100))=[Montant TTC] */

// ****************************************************************************

/* function verify() {
    var no;
    no = Number(document.getElementById("age").value);
    if (no < 18) {
        alert("va rediriger vers: " + 'https://www.facebook.com/mickeysfanclubpage');
        document.location.href= 'https://www.facebook.com/mickeysfanclubpage'; 
    }

    else if (no > 18) {
        alert("vous etes un adult voici un café" &#9749);
    }
    else {
        alert("vous etes un adult voici un café" &#9749);
    }
} */



var age = 18;
window.alert('salut!');
var age = window.prompt("quel est votre age?");
console.log(age);
if (age < 18) {
 /*  alert("va rediriger vers: " + "https://www.facebook.com/mickeysfanclubpage"); */
  document.location.href = "https://www.facebook.com/mickeysfanclubpage";
} else if (age > 18) {
  alert("vous etes un adult voici un café" /*&#9749*/);
} else {
  alert("vous etes un adult voici un café" /*&#9749*/);
}
