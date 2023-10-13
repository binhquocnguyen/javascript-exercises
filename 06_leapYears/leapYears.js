const leapYears = function(year) {
    if ( !(year % 400) ) return true;
    else if ( !(year % 100) ) return false;
    else if ( !(year % 4) ) return true;
    else return false;
    //Better use the solution (shorter form)
};


// Do not edit below this line
module.exports = leapYears;
