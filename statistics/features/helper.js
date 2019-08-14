function binomial(n, k) {
   if ((typeof n !== 'number') || (typeof k !== 'number'))
return false;
  var coeff = 1;
  for (var x = n-k+1; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;
  return coeff;
}

function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

// ================================================================
module.exports = {
  binomial,
  factorial
}