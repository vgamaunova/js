
/*
* Get position element after click
*/
document.onclick = function(e){
    console.log('left '+ e.target.offsetLeft+', top '+e.target.offsetTop)
};
/*
* loading component
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


//button-wrapper
document.querySelector(".button-wrapper").onclick = function(e){
    Menu(e)
};
function Menu(e) {
    var elem = document.querySelector(".car");
    this.fast = function() {
        alert( 'сохраняю' );
        elem.style.cssText = 'transform: translate (100px, 0);transition:0.5s'
    };
    this.slow = function() {
        alert( '2' );
        elem.style.cssText = 'transform: translate (100px, 0);transition:2s'
    };
    var self = this;

    elem.onclick = function(e) {
        var target = e.target;
        var action = target.getAttribute('data-speed');
        if (action) {
            self[action]();
        }
    };
}
