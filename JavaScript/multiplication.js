// var num = prompt("ecrit un nombre entre 2 et 9 sardine!");


function printTable() {
    var num;
    num = Number(document.getElementById('txtNumber').value);
    for (var i = 1; i <= 10; i++) {
        var pTag = document.getElementById('pPrint');
        pTag.innerHTML += (num * i) + "<br/>"
    }
    if (num >= 2 && num <= 9) {
        return true
    } else {
        alert("SARDINE!! entre 2 et 9!")
        return false
    }
}

/* var choix = prompt("choisis un nombre entre 2 et 9 ");
for (var i = 1; i<=10; i++){
    var resultat = choix * i;
    document.write(choix + "x" + i + "=" + resultat + "<br>");
} */

