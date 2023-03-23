const divCon = (x) => {
    let sum = 0
    for(let i=0; i<x.length; i++){
      typeof x[i] === 'number' ? sum += x[i] : sum -= parseInt(x[i])
    }
    return sum
  }