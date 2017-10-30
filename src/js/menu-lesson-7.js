
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


// Change of car speed

document.querySelector(".button-wrapper").onclick = function(e){
    var car = document.querySelector(".car");
    if(e.target.classList == "fast"){
        car.style.cssText = 'transform: translate(-100px, 50px);transition: 0.5s';
    }else if(e.target.classList == "slow"){
        car.style.cssText = 'transform: translate(-100px, 50px);transition:2s';
    }
};




//Board with notes

var submitButton = document.getElementById('submit-notes');
var noteValue = document.getElementById('note-value');

submitButton.onclick = function(e){
    var description = noteValue.value; // get value
    var newNote = document.createElement('div');//create new element
    newNote.className += "note-item"; //add class for this(new) element
    newNote.innerHTML = description; //add value for this(new) element
    note.appendChild(newNote); //add new element after all elements in wrapper
    noteValue.value =""; //clear form
    e.preventDefault()
};

var DragManager = new function() {

    var dragObject = {};

    var self = this;

    function onMouseDown(e) {

        if (e.which != 1) return;

        var elem = e.target.closest('.note-item');
        if (!elem) return;

        dragObject.elem = elem;
        //save start position
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return; // element no press

        if (!dragObject.avatar) {
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            // small distance
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }

            //begin the transfer
            dragObject.avatar = createAvatar(e); //create avatar
             if (!dragObject.avatar) {
                dragObject = {};
                return;
            }

            // avatar created successfully
            // create auxiliary properties shiftX / shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e); // display the start of the transfer
        }

        // display the transfer of the object with each mouse movement
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function onMouseUp(e) {
        // clear dragObject
        dragObject = {};
    }

    function createAvatar(e) {
        //  save old value (return value after cancel)
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        // function for cancel transfer
        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;
        //initial start transfer
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function(dragObject, dropElem) {};
    this.onDragCancel = function(dragObject) {};

};


function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}