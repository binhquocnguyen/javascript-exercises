const palindromes = function (str) {
    let forStr = str
                .toLowerCase() 
                .split('')
                .filter( item => (item >= 'a' && item <= 'z') || (item >= '0' && item <= '9') && !(item === ' ') )
                .join('');
    let backStr = forStr
                .split('')
                .reverse()
                .join('');
    return (forStr == backStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
