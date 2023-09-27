const cats = ["Milo", "Otis", 'Garfield']

beforeEach(function() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield')
}
)

function destructivelyAppendCat() {
     cats.push('Ralph')
     return cats
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}
function appendCat() {
    const newCat = [...cats.slice(), 'Broom']
    return newCat
}
function prependCat() {
    const anotherOne = ['Arnold', ...cats.slice()]
    return anotherOne
}

function removeLastCat() {
    const udone = [...cats.slice(0, -1)]
    return udone
}

function removeFirstCat() {
    const endit = [...cats.slice(1)]
    return endit
}


