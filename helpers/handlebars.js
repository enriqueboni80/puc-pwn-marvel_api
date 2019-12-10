module.exports = {
    foo: function(teste) {
        return teste
    },
    bar: function() {
        return "BAR!";
    },
    divisivelPor: function(columns, index, opts) {
        if (index % columns === 0) {
            return opts.fn(this)
        } else {
            return opts.inverse(this)
        }
    }
}