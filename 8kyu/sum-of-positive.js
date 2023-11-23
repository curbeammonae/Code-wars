//You get an array of numbers, return the sum of all of the positives ones.
x = -10

console.log(Math.sign(x))


function go(arr){
  let pos= []
  for(let i = 0; i < arr.length; i++){
    //console.log(arr[i])
    if(Math.sign(arr[i]) == 1){
      
     pos.push(arr[i])
      
    }
  }
  console.log(pos)
  let sum = pos.reduce((a,b)=> a+b, 0)
  console.log(sum)

  
}

go([10,20,30, -23, -32])