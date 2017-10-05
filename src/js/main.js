/*
  * lesson 3
  *  object
 */
var lexus = {};
var ferrari = {};
lexus = {
    wheels: 'summer wheels',
    playMusic: function () {
        // realizes the function of music playback object
        console.log('бла бла');
    },
    ride: function () {
        // this function realizes the object movement function
        console.log('дыр дыр');
    },
    changeWheels: function () {
        // this function modified property 'wheels'
        this.wheels = 'winter wheels';
        console.log(this.wheels);
    }
}
ferrari = {
    wheels: 'winter wheels',
    playMusic:  function () {
        // realizes the function of music playback object
        console.log('бла бла');
    },
    ride: function () {
        // this function realizes the object movement function
        console.log('дыр дыр');
    },
    changeWheels: function () {
        // this function modified property 'wheels'
        this.wheels ='summer wheels';
        console.log(this.wheels);
    }
}


lexus.ride()
lexus.changeWheels()
lexus.playMusic();
ferrari.changeWheels();
