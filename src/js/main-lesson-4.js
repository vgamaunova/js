
(function () {
    var array = [1,5,4,6,8854,5,8,4];
    var lastPosition = array.length;
    var findItem = 8;
    for(var i = 0; i<lastPosition; i++){
        var arrayValueItem = array[i];
        if(arrayValueItem == findItem){
            console.log(arrayValueItem);
            break
        }
    }
}());