function vp() {
  var imp = parseInt(document.getElementById("vp_imp").value);
  var boards = parseInt(document.getElementById("vp_boards").value);

  if (imp > 85) {
    imp = 85
  }

  var dict_board = {6: 0, 7: 1, 8: 2, 9: 3, 10: 4, 12: 5, 14: 6, 16: 7, 20: 8, 32: 9}

  var lst_cont = [
          [10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00],
          [10.50, 10.47, 10.44, 10.41, 10.39, 10.36, 10.33, 10.31, 10.28, 10.22],
          [10.99, 10.92, 10.86, 10.81, 10.77, 10.71, 10.66, 10.61, 10.55, 10.44],
          [11.90, 11.77, 11.67, 11.58, 11.50, 11.38, 11.28, 11.20, 11.08, 10.86],
          [12.33, 12.18, 12.05, 11.94, 11.85, 11.70, 11.58, 11.48, 11.34, 11.07],
          [12.75, 12.57, 12.42, 12.29, 12.18, 12.01, 11.87, 11.76, 11.59, 11.27],
          [13.15, 12.94, 12.77, 12.63, 12.51, 12.31, 12.16, 12.03, 11.83, 11.47],
          [13.53, 13.31, 13.12, 12.96, 12.83, 12.61, 12.44, 12.29, 12.07, 11.67],
          [13.90, 13.65, 13.45, 13.28, 13.14, 12.90, 12.71, 12.55, 12.30, 11.86],
          [14.25, 13.99, 13.78, 13.59, 13.43, 13.18, 12.97, 12.80, 12.53, 12.05],
          [14.59, 14.32, 14.09, 13.89, 13.72, 13.45, 13.23, 13.04, 12.76, 12.24],
          [14.92, 14.63, 14.39, 14.18, 14.00, 13.71, 13.48, 13.28, 12.98, 12.42],
          [15.24, 14.93, 14.68, 14.46, 14.28, 13.97, 13.72, 13.52, 13.20, 12.60],
          [15.54, 15.22, 14.96, 14.74, 14.54, 14.22, 13.96, 13.75, 13.41, 12.78],
          [15.83, 15.50, 15.23, 15.00, 14.80, 14.46, 14.19, 13.97, 13.61, 12.95],
          [16.11, 15.78, 15.50, 15.26, 15.05, 14.70, 14.42, 14.18, 13.81, 13.12],
          [16.38, 16.04, 15.75, 15.50, 15.29, 14.93, 14.64, 14.39, 14.01, 13.29],
          [16.64, 16.29, 16.00, 15.74, 15.52, 15.15, 14.85, 14.60, 14.20, 13.46],
          [16.89, 16.53, 16.23, 15.97, 15.75, 15.37, 15.06, 14.80, 14.39, 13.62],
          [17.12, 16.77, 16.46, 16.20, 15.97, 15.58, 15.26, 15.00, 14.58, 13.78],
          [17.35, 16.99, 16.68, 16.42, 16.18, 15.79, 15.46, 15.19, 14.76, 13.94],
          [17.58, 17.21, 16.90, 16.63, 16.39, 15.99, 15.66, 15.38, 14.94, 14.09],
          [17.79, 17.42, 17.11, 16.83, 16.59, 16.18, 15.85, 15.56, 15.11, 14.24],
          [17.99, 17.62, 17.31, 17.03, 16.78, 16.37, 16.03, 15.74, 15.28, 14.39],
          [18.19, 17.82, 17.50, 17.22, 16.97, 16.55, 16.21, 15.92, 15.45, 14.54],
          [18.38, 18.01, 17.69, 17.41, 17.16, 16.73, 16.38, 16.09, 15.61, 14.68],
          [18.56, 18.19, 17.87, 17.59, 17.34, 16.91, 16.55, 16.26, 15.77, 14.82],
          [18.73, 18.36, 18.04, 17.76, 17.51, 17.08, 16.72, 16.42, 15.93, 14.96],
          [18.90, 18.53, 18.21, 17.93, 17.68, 17.24, 16.88, 16.58, 16.08, 15.10],
          [19.06, 18.69, 18.37, 18.09, 17.84, 17.40, 17.04, 16.73, 16.23, 15.24],
          [19.22, 18.85, 18.53, 18.25, 18.00, 17.56, 17.19, 16.88, 16.38, 15.37],
          [19.37, 19.00, 18.68, 18.40, 18.15, 17.71, 17.34, 17.03, 16.52, 15.50],
          [19.51, 19.15, 18.83, 18.55, 18.30, 17.86, 17.49, 17.17, 16.66, 15.63],
          [19.65, 19.29, 18.97, 18.69, 18.44, 18.00, 17.63, 17.31, 16.80, 15.76],
          [19.78, 19.43, 19.11, 18.83, 18.58, 18.14, 17.77, 17.45, 16.93, 15.88],
          [19.91, 19.56, 19.24, 18.97, 18.71, 18.28, 17.91, 17.59, 17.06, 16.00],
          [20.00, 19.68, 19.37, 19.10, 18.84, 18.41, 18.04, 17.72, 17.19, 16.12],
          [20.00, 19.80, 19.50, 19.22, 18.97, 18.54, 18.17, 17.85, 17.32, 16.24],
          [20.00, 19.92, 19.62, 19.34, 19.10, 18.66, 18.29, 17.97, 17.44, 16.35],
          [20.00, 20.00, 19.74, 19.46, 19.22, 18.78, 18.41, 18.09, 17.56, 16.46],
          [20.00, 20.00, 19.85, 19.58, 19.33, 18.90, 18.53, 18.21, 17.68, 16.57],
          [20.00, 20.00, 19.95, 19.69, 19.44, 19.02, 18.65, 18.33, 17.79, 16.68],
          [20.00, 20.00, 20.00, 19.80, 19.55, 19.13, 18.76, 18.44, 17.90, 16.79],
          [20.00, 20.00, 20.00, 19.90, 19.66, 19.24, 18.87, 18.55, 18.01, 16.90],
          [20.00, 20.00, 20.00, 20.00, 19.76, 19.34, 18.98, 18.66, 18.12, 17.01],
          [20.00, 20.00, 20.00, 20.00, 19.86, 19.44, 19.08, 18.77, 18.23, 17.11],
          [20.00, 20.00, 20.00, 20.00, 19.96, 19.54, 19.18, 18.87, 18.33, 17.21]
  ]
  var result = document.getElementById("vp_res");
  var lst = [6,7,8,9,10,12,14,16,20,32]

  if (lst.includes(boards)) {
    var vp1 = lst_cont[imp][dict_board[boards]]
    var vp2 = Math.round(100*(20 - vp1))/100
    result.innerHTML = "Das Ergebnis in Victory Points beträgt : " + vp1 + " - " + vp2;
  } else {
    result.innerHTML = "Die Anzahl der Boards muss 6, 7, 8, 9, 10, 12, 14, 16, 20 oder 32 sein.";
  }


};
