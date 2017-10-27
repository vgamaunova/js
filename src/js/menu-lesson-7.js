
/*
* Get position element after click
*/
document.onclick = function(e){
    console.log('left '+ e.target.offsetLeft+', top '+e.target.offsetTop)
};

/*
* Loading component
 */
(function () {
    function addClass(elem) {
        elem.classList.add("active");
    }
    setTimeout(function redColor() {
        var elem = document.querySelector(".color-red");
        addClass(elem)
    },0);
    setTimeout(function yellowColor() {
        var elem = document.querySelector(".color-yellow");
        document.querySelector(".color-red").classList.remove("active");
        addClass(elem)
    },500);

    setTimeout(function greenColor() {
        var elem = document.querySelector(".color-green");
        document.querySelector(".color-yellow").classList.remove("active");
        addClass(elem);
    }, 1000);
})();


//

document.querySelector(".button-wrapper").onclick = function(e){
     var car = document.querySelector(".car");
    if(e.target.classList == "fast"){
        car.style.cssText = 'transform: translate(-100px, 50px);transition: 0.5s';
    }else if(e.target.classList == "slow"){
        car.style.cssText = 'transform: translate(-100px, 50px);transition:2s';
    }
};