function calc_suit_any(id_a, id_b, id_c, id_d) {
  var a = parseInt(document.getElementById(id_a).value);
  var b = parseInt(document.getElementById(id_b).value);
  var c = parseInt(document.getElementById(id_c).value);
  var d = parseInt(document.getElementById(id_d).value);
  if (a - b == 0 || a - c == 0 || a - d == 0) {
    var a1 = 0
  }
  else {
    var a1 = 1
  }
  if (b - c == 0 || b - d == 0) {
    var b1 = 0
  }
  else {
    var b1 = 1
  }
  if (c - d == 0) {
    var c1 = 0
  }
  else {
    var c1 = 1
  }

  var r = 1 + a1 + b1 + c1;

  var result = document.getElementById("res_suit_any");

  if(a + b + c + d == 13) {
    result.innerHTML = "Die Wahrscheinlichkeit beträgt " + Math.round(10000*binomial(13,a)*binomial(13,b)*binomial(13,c)*binomial(13,d)/635013559600)/100 + "%.";
  }
  else {

    result.innerHTML = "Keine gültige Verteilung!"
  }
};
