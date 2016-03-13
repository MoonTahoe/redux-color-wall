module.exports = {

    max(arr) {
        return arr
            .filter(n => typeof n === 'number')
            .reduce((p,n) => (n > p) ? n : p, 0);
    },

    pluck(field, arr) {
        return arr.map(x => x[field]);
    }

};