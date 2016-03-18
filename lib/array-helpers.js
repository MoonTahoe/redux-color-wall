
module.exports = {

    max(arr) {
        return arr
            .filter(n => typeof n === 'number')
            .reduce((p, n) => (n > p) ? n : p, 0);
    },

    pluck(field, arr) {
        return arr.map(x => x[field]);
    },

    sortBy(type, field) {
        switch (type) {
            case "date" :
                return (a, b) => new Date(b[field]) - new Date(a[field]);
            case "string" :
                return (a, b) => (a[field] < b[field]) ? -1 : 1;
            default:
                return (a, b) => b[field] - a[field];
        }
    }

};