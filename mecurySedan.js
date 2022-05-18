//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//Create a Car class that extends the Vehicle class (located in the vehicle.js).
//Add constructor.
//Add the super keyword to call the parent class constructor.
//Add the properties listed in the Property chart above.
 class mercurySedan extends Vehicle{
                                    constructor(make, model, year, color, mileage,passenger,numberOfWheels){
                                        super(make, model, year, color, mileage,passenger,numberOfWheels)
                                        this.maximumPassengers = 5;
                                        this.maximumSpeed = 160;
                                        this.fuel = 10;
                                        this.scheduleService = false;
                                    }
    //Add the methods with pesudo logic listed in the Methods chart.
    //start with the method being pulled from the parent 
                                        start();
    //load passenger method ideology
    // if this.passenger is less than the max passengers then there is room available. 
    //define that the number being passed as an argument  is the number of this.passenger
    //  if the passenger is NOT less than max passengers tell there is no room.                          
                                        loadPassenger(num){
                                            if(this.passenger < this.maximumPassengers){
                                            console.log('There is still Available Room');
                                         }{
                                            if ((num) + this.passenger <= this.maximumPassengers) {
                                                this.passenger = num;
                                                return this.passenger;
                                            } else{
                                                    console.log( this.make +''+ this.model+''+ "is completely full, there is no more available room");
                                                }
                                            }
                                            }
                                          
                                    
                                        scheduleService(mileage){
                                            if(this.mileage > 30000);
                                            this.scheduleService == true)
                                            return this.scheduleService;
                                        }                                       }                                                      

                                        
 
//create object
let mercurysedan = new mercurySedan( 'Mercury','Milan', '2013', 'silver', 29999,'5','4')

//Display Properties

mercurysedan.scheduleService()
mercurysedan.loadPassenger()
mercurysedan.start()
console.log(mercurysedan)


