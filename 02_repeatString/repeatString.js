const repeatString = function(string, num) {
    let stringToReturn = '';
    if (num < 0)
    {
        return stringToReturn = "ERROR";
    }
    for (let index = 0; index < num; index++) {
        stringToReturn += string;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
