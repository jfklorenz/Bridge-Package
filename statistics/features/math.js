// ================================================================
// Binomial
function binomial(n, k) {
    if ((typeof n !== 'number') || (typeof k !== 'number')) throw "1014: Input must be numbers.";
    if ((!(n % 1 === 0)) && (!(k % 1 === 0))) throw "1014: Input must be Integers.";
    if (k > n) throw "1014: n must be greater or equal to k.";
    if(n < 0 || k < 0) throw "1014: n and k must be larger or equal to 0."

    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return Math.round(coeff);
}

// ================================================================
// Factorial
function factorial(num) {
    if (isNaN(num)) throw "1014: Input must be a number.";
    if (!Number.isInteger(num)) throw "1014: Input must be an Integer."
    if (num < 0) throw "1014: Input must be larger or equal to 0.";

    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return Math.round(rval);
}

// ================================================================
// Round & Percentage
function percentageRounded(value) {
    if ((typeof value !== 'number')) throw "1014: Input must be a number.";
    return Math.round(10000 * value) / 10000;
}

// ================================================================
// Exports
module.exports = {
    factorial,
    binomial,
    percentageRounded
}
