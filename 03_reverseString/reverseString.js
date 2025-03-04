const reverseString = function(stringToBeReversed)
{
    let reversedStringArray = Array.from(stringToBeReversed);
    reversedStringArray.reverse();
    reversedString = reversedStringArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
