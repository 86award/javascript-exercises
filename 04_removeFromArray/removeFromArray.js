const removeFromArray = function(originalArray, ...args) {
    // get two arrays initialised
    args.forEach(element => {
        for (let i = 0; i < originalArray.length; i++) {
            if (originalArray[i] === element)
            {
                originalArray.splice(i, 1);
                i = 0;
            }
        }
    });
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
