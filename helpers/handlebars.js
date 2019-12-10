module.exports = {
    foo: function(teste) {
        return teste
    },
    bar: function() {
        return "BAR!";
    },
    montarGrid: function(teste) {
        teste.forEach(element => {
            console.log(element.name)
        });
    }
}


/* var line = []
var result = []
var position
var x = 0

for (let index = 0; index < 100; index++) {
    if (index % 5 === 0) {
        line = []
        position = x++
    }
    line.push(index)
    result[position] = line
}

console.log(result) */