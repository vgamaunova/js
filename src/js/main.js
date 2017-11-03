function car(name){
    this.name = name;
};
car.prototype.go = function() {
    console.log( 'go ' + this.name );
};

function  cabriolet(name) {
    this.name = name;
};
cabriolet.prototype = Object.create(car.prototype);


cabriolet.prototype.go = function() {
    console.log( 'hinged roof and  go');
};

var cabrioletCar = new cabriolet('cabriolet');

var truck =  new car('DAF');

cabrioletCar.go();
truck.go();