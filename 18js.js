
function comp(p, t, r) {
    CI = p * (Math.pow((1 + r / 100), t));
    return CI

}


var result = comp(5,7,9);
console.log(result);