
exports.min = function min (array) {
        let a =  Math.min.apply(null, array); 
        if(a === 0 || a === Infinity){
            return 0}
            return a   
}

exports.max = function max (array) {
        let a = Math.max.apply(null, array)
        if(a === 0 || a === -Infinity){
            return 0}
            return a   
      
}

exports.avg = function avg (array) { 
    let b = Math.max.apply(null, array)
    if(b === 0|| b === -Infinity || b === Infinity){return 0}
    let reducer = (oper, sum) => oper + sum;
    let a = 1
 a = (array.reduce(reducer))/array.length;

           return a 
}
