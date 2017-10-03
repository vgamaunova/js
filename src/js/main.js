var lexus = {};
var ferrari = {};
function  fadeImages(images){
    images.style.display="inline-block";
}
function ride(){
    var images = document.getElementById("ride");
    fadeImages(images);
}
function play(){
    var images = document.getElementById("song");
    fadeImages(images);
}
function rename(name) {
    this.wheels = name;
    console.log(this);
}
lexus = {
    playMusic: play,
    ride: ride,
    wheels: 'summer wheels',
    changeWheels: rename
}
ferrari = {
    playMusic: play,
    ride:ride,
    wheels: 'winter wheels',
    changeWheels: rename
}
// lexus.ride()
// lexus.changeWheels()
// lexus.playMusic();
// ferrari.changeWheels('sprin');
