/*
*  Plugin for searching element in array
*/
(function () {
    var haystack = [1,5,4,6,8854,5,8,4];
    var needle = 8;
    for(var i = 0; i<haystack.length; i++){
        var arrayValueItem = haystack[i];
        if(arrayValueItem == needle){
            console.log(arrayValueItem);
            break
        }
    }
}());

/*
*  Plugin for order array
*/
(function () {
    var array = [1,2,3,4,5,6];
    var newArray = [];

}());

/*
*  Plugin for searching string in array
*/
(function () {
    var haystack = [1,2,3,'Test',5,6];
    var needle = 'string';
    for(var i=0; i < haystack.length; i++){
        var arrayValueItem = haystack[i];
       if( typeof(arrayValueItem) === needle ){
            console.log('this string is ' + arrayValueItem)
       }
    }
}());


