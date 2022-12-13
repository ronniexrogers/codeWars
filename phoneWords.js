const phoneWords = (stringOfNums) => {
  
    const letters = [
      [null],
      [''],
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['j', 'k', 'l'],
      ['m', 'n', 'o'],
      ['p', 'q', 'r', 's'],
      ['t', 'u', 'v'],
      ['w', 'x', 'y', 'z'],
      [' ']
    ]
    
    const stringArray = [...stringOfNums]
    let sentence = ''

    stringArray.map((letter, i) => {
        if (letter === stringArray[i + 1]) {
            let totalPresses = 0
            totalPresses += 1
            sentence += letters[letter][totalPresses]
        } else if (letter === stringArray[i + 3]) {
            sentence += letters[letter][stringArray.length - 1]
        } else if(letter != stringArray[i-1]){
            let totalPresses = 0
            sentence += letters[letter][totalPresses]
        }
    })
    return sentence
  }

console.log(phoneWords("55282"))