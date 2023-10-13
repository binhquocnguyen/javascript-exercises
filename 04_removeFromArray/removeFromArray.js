const removeFromArray = function() {
    for (let i = 0; i <= (arguments[0].length - 1); i++) {
        for (let j = 1; j <= (arguments.length -1); j++) {
            if (arguments[0][i] === arguments[j]) {
                arguments[0].splice(i, 1);
                i--;
                break;
            }
        }
    }

    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
