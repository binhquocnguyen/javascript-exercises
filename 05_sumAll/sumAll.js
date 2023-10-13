const sumAll = function(firstNum, secondNum) {
    if ( !(typeof firstNum === 'number') || !(typeof secondNum === 'number') ) {
        return 'ERROR';
    } else if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    } else if (firstNum > secondNum) { //Case: firstNum > secondNum
        [firstNum, secondNum] = [secondNum, firstNum];
    } 

    let sum = 0;
    for (i = firstNum; i <= secondNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
