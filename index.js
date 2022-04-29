function receivesAFunction (spy) {
    spy()
}

function returnsANamedFunction () {
    return function namedFunction(){
        console.log('Hey this is a named function')
    }
}

function returnsAnAnonymousFunction (spy) {
    return function () {
        console.log('Hey this is an anonymous function')
    }

}