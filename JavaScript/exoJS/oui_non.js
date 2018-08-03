/* var questions = [
  "Possèdes-tu une tuque avec un pompon?",
  "As-tu 12 ans?",
  "Fais-tu ton lit le matin?",
  "As-tu déjà pris le métro?",
  "Es-tu bon en anglais?"
];

function Start() {


    var questions = [Math.floor(Math.random() * questions.length)];
    var rep = questions[i];
    prompt(rep);

    if (rep == "oui" || rep == "non") {
      alert("GAME OVER");
    } else {
      return questions[i];
    }
}
Start(); */

/* function repeatStringNumTimes(string, times) {
    var times= 7;
    var repeatedString = "###";
    while (times < 1) {
        repeatedString += string;
        times;
    }
    return repeatedString;
}
console.log(repeatStringNumTimes); */


  var str = "";
 for(var i = 1; i <8; i++){
     str += "#";
     console.log(str);
 }

var star = "";
var compteurdetours = 1;
while (compteurdetours <= 7){
    star = star+ "*";
    console.log(star);
    compteurdetours++;
}