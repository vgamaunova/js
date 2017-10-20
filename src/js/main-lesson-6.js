
/*
* Fibonacci numbers
 */
function fib(n) {
    if(n <= 1){
        return n;
    }else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log( fib(3) ); // 2
console.log( fib(7) ); //13

var positionTop = 0;
// (function(){
    function positionElement() {
        var element =  document.getElementById('song');
        positionTop  = positionTop + 10;
        console.log(positionTop);
    }
// }())
setInterval(positionElement, 2000);

// setInterval(console.log(function(){return top = top + 10}), 2000);