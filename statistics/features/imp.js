function imp() {

  var mp = parseInt(document.getElementById("imp_mp").value);
  var result = document.getElementById("imp_res");
  var imp = 0
  var dif = 0
    if (mp < 0) {
      dif = - mp
  } else {
    dif = mp
  }

  var imp_range = [10, 40, 80, 120, 160, 210, 260, 310, 360, 420, 490,
               590, 740, 890, 1090, 1290, 1490, 1740, 1990, 2240, 2490,
               2990, 3490, 3990]


  for (i = 0; i < 24; i++) {
      if (dif > imp_range[i]) {
        imp = imp + 1
      }
  }

  if (mp < 0) {
    imp = -imp
  }

  if (mp == 1) {
    if (imp == 1 || imp == -1) {
      result.innerHTML = mp + " Matchpoint ergibt " + imp + " IMP.";
    } else {
      result.innerHTML = mp + " Matchpoint ergibt " + imp + " IMP's.";
    }
  } else if (mp == 0 || mp > 1) {
    if (imp == 1 || imp == -1) {
      result.innerHTML = mp + " Matchpoints ergeben " + imp + " IMP.";
    } else {
      result.innerHTML = mp + " Matchpoints ergeben " + imp + " IMP's.";
    }
  } else {
    result.innerHTML = "Warte auf Eingabe..."
  }
};
