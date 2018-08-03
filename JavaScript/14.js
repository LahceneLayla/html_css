// console.log(Math.ceil(100));
// console.log(Math.floor(50));
// const num = Math.ceil(Math.random() * 100 );
// const num = Math.floor(Math.random() * 50);
// var gnum = prompt('ecrit un nombre');
// if (gnum == num)
//     alert('cool');
// else
//     alert('pas cool ' + num);

var numero = prompt("entrez un nombre entre 50 et 100");
while (numero < 50 || numero > 100 || isNaN(numero)) {
    numero = prompt("faux! entrez un nombre entre 50 et 100");
}
alert("bravo vous n'etes pas aveugle: " + numero);  

