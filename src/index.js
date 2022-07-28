module.exports =function reverse (n) {
    let num=n
    if(num<0){
         num= n*-1
    }  
  let arr = ('' + num).split('')
  arr.reverse()
    let arr2=arr.join('')
    return arr2
}
