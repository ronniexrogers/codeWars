const luckCheck = (ticket) => {

    if(/^\d+$/.test(ticket) === false) throw new Error('Parameter is not a number!')

    let slicedTicketOne
    let slicedTicketTwo
    let middlePosition = Math.floor(ticket.length / 2)
  
    if(ticket.length % 2 !== 0) {
      slicedTicketOne = ticket.slice(0, middlePosition).split('').reduce((a, b) => +a + +b)
      slicedTicketTwo = ticket.slice(middlePosition + 1).split('').reduce((a, b) => +a + +b)
    }else{
        slicedTicketOne = ticket.slice(0, ticket.length / 2).split('').reduce((a, b) => +a + +b)
        slicedTicketTwo = ticket.slice(ticket.length / 2).split('').reduce((a, b) => +a + +b)
    }
    return parseInt(slicedTicketOne) === parseInt(slicedTicketTwo)
  }