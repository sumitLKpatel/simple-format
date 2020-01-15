'use strict';

const roundUp = num => {
    return Number(Number((num.toFixed(5) * 100) / 100).toFixed(2));
}


module.exports = {
    roundUp
}