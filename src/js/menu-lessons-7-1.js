(function(){
    var calculatorBox = document.getElementById('calculator');
    calculatorBox.oninput = calculate;
    function calculate(){
        var re = /[1-9][0-9]{0,3},?[0-9]{0,2}/ig;
        var calculatorValue = calculatorBox.value;
        console.log(calculatorValue.match(re))
        // if (){
        //     console.log('OK')
        // }else{
        //     console.log('err')
        // }
    }
}())