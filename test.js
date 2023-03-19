function fizzBuzz(n) {
    let tempArray = []
    for(let i=1; i<=n; i++){
        tempArray.push(i)
    }
    return tempArray.map(number => {
        if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
        if(number % 3 === 0) return 'Fizz'
        if(number % 5 === 0) return 'Buzz'
        else return number
    })
}

console.log(fizzBuzz(65))