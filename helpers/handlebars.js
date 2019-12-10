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
    },
    montarGridHtmlCharacters: function(arrayOfThings, columns) {
        var line = []
        var result = []
        var position
        var x = 0
        var html_result = ''

        for (let index = 0; index < arrayOfThings.length; index++) {
            if (index % columns === 0) {
                line = []
                position = x++
            }
            line.push(arrayOfThings[index])
            result[position] = line
        }

        html_result += '<table>'
        result.forEach((line, index) => {
            html_result += '<tr>'
            line.forEach(character => {
                html_result += `<td>${character.name}</td>`
            });
            html_result += '</tr>'
        });
        html_result += '</table>'
        return html_result
    }
}