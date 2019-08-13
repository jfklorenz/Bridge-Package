function input_random_dist(a, b, c, d) {
  var inp1 = document.getElementById(a);
  var inp2 = document.getElementById(b);
  var inp3 = document.getElementById(c);
  var inp4 = document.getElementById(d);

  var dist = [0, 0, 0, 0];

  for (i = 0; i < 13; i++) {
    rnd = Math.floor((Math.random() * 4))
    dist[rnd] = dist[rnd] + 1;
  };

  inp1.value = dist[0];
  inp2.value = dist[1];
  inp3.value = dist[2];
  inp4.value = dist[3];
}
