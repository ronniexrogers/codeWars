Math.round = (number) => {
    return (number - ~~number >= .5 ? 1 : 0) + ~~number
  }
  
Math.ceil = (number) => {
    return ~~number === number ? number : ~~number + 1
  }
  
Math.floor = (number) => {
    return ~~number
  }

  console.log(Math.ceil(5))