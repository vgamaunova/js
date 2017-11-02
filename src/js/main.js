function car(name){
    this.name = name;
    this.speed = 0;
};

var cabriolet = {
    jumps: true,
    __proto__: car
};
