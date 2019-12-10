module.exports = {
    foo: function(teste) {
        return teste
    },
    bar: function() {
        return "BAR!";
    },
    montarGrid: function(arrayOfThings, columns) {
        var line = []
        var result = []
        var position
        var x = 0

        for (let index = 0; index < arrayOfThings.length; index++) {
            if (index % columns === 0) {
                line = []
                position = x++
            }
            line.push(arrayOfThings[index].id)
            result[position] = line
        }

        console.log(result)
    }
}