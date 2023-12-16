// const thingsArray = ["Thing 1", "Thing 2"]
    
// /**
//  * Challenge: Map over the thingsArray to generate
//  * a <p> element for each item and render them on the page
//  * below the button
//  */

// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

function getLength(arr){
    let len = arr.length
    return len
  }
  function getFirst(arr){
   let firstEl = arr[0]
    return firstEl
  }
  function getLast(arr){
    let lastEl = arr[arr.length -1]
  return lastEl
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop()
    
    return arr
  }