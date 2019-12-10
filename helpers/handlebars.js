module.exports = {
    foo: function(teste) {
        return teste
    },
    bar: function() {
        return "BAR!";
    },
    divisivelPor: function(columns, index) {
        if (index % columns === 0) {
            return "pin"
        } else {
            return index
        }
    }
}