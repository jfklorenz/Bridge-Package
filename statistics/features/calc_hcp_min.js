function calc_hcp_min(id) {
  var hcp = parseInt(document.getElementById(id).value);
  var dict_com = {0: 100.0, 1: 99.54, 2: 98.85, 3: 97.49, 4: 95.03, 5: 91.18,
              6: 86.0, 7: 79.44, 8: 71.43, 9: 62.52, 10: 53.17, 11: 43.76,
              12: 34.82, 13: 26.79, 14: 19.88, 15: 14.18, 16: 9.76, 17: 6.45,
              18: 4.09, 19: 2.48, 20: 1.45, 21: 0.80, 22: 0.42, 23: 0.21,
              24: 0.1, 25: 0.05, 26: 0.02, 27: 0.0, 28: 0.0, 29: 0.0, 30: 0.0,
              31: 0.0, 32: 0.0, 33: 0.0, 34: 0.0, 35: 0.0, 36: 0.0, 37: 0.0}

  var result = document.getElementById("res_hcp_min");
  if(hcp == 1) {
    result.innerHTML = "Die Wahrscheinlichkeit für mindestens einen Figurenpunkt beträgt " + dict_com[hcp] + "%.";
  }
  else {
    if(hcp >= 0 && hcp <= 37) {
      result.innerHTML = "Die Wahrscheinlichkeit für mindestens " + hcp + " Figurenpunkte beträgt " + dict_com[hcp] + "%.";
    }
    else {

      result.innerHTML = "Keine gültige Anzahl an Figurenpunkten!";
    }
  }
};
