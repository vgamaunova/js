
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

// (function(){
//     var top = 0;
//     function positionElement() {
//         var element =  document.getElementById('song');
//         element.style="position: absolute;top:"+top+"";
//         return top = top + 10;
//     }
//    setInterval(positionElement, 100);
// }())