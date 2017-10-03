var lexus = {};
var ferrari = {};
lexus = {
    wheels: 'summer wheels',
    playMusic: function () {
        console.log('бла бла')
    },
    ride: function () {
        console.log('дыр дыр')
    },
    changeWheels: function () {
        this.wheels = 'winter wheels';
        console.log(this.wheels);
    }
}
ferrari = {
    wheels: 'winter wheels',
    playMusic:  function () {
        console.log('бла бла')
    },
    ride: function () {
        console.log('дыр дыр')
    },
    changeWheels: function () {
        this.wheels ='summer wheels';
        console.log(this.wheels);
    }
}

// function  fadeImages(images){
//     images.style.display="inline-block";
// }
// function ride(){
//     var images = document.getElementById("ride");
//     fadeImages(images);
// }
// function play(){
//     var images = document.getElementById("song");
//     fadeImages(images);
// }
// function rename(name) {
//     this.wheels = name;
//     console.log(this);
// }


lexus.ride()
lexus.changeWheels()
lexus.playMusic();
ferrari.changeWheels();
