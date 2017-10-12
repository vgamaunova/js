function computerProgress() {
    var numberCol = Math.floor(Math.random() * 9) + 1;
    var itemColArray = document.querySelectorAll('.col:nth-child('+numberCol+')');
    var itemCol = itemColArray[0];
    if(document.querySelectorAll('.disabled').length <=8){
        if(!itemCol.classList.contains('disabled')){
            itemCol.classList.add('disabled');
            itemCol.innerText = 'x';
            return false;
        }else{
            computerProgress();
        }
    }else{
        document.getElementById('message').innerText = 'Game over';
        return false;
    }
}
function userProgress(param) {
    if(document.querySelectorAll('.disabled').length <= 8){
        if(!param.classList.contains('disabled')){
            param.classList.add('disabled');
            param.innerText = '0';
            return false;
        }
    }else{
        document.getElementById('message').innerText = 'Game over';
        return false;
    }
}