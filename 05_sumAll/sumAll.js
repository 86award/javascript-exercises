const sumAll = function(a, b) {
    // if you subtract a from b you have the delta
    // let increments = b - a;
    let result = 0;
    if (a > b)
    {
        let c = a;
        a = b;
        b = c;
    }

    if (a <= 0 || b <= 0) return "ERROR";
    if (typeof a != "number" || typeof b != "number") return "ERROR";
    if (a % 1 != 0 || b % 1 != 0) return "ERROR";

    // then if you use a for loop to add them up
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
