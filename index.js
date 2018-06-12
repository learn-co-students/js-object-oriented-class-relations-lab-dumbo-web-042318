let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;
// `Driver` class:
class Driver {
//   + A driver has many trips, and has many passengers through trips.
//   + `new Driver()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
    constructor(name){
      this.name = name;
       this.id = driverId++;
       store.drivers.push(this);
    }
//   + `trips()` - returns all of the trips that a driver has taken
      trips() {
        const theTrips = store.trips.filter(trip => {
          return trip.driverId == this.id;
        });
        return theTrips;
      }

      //   + `passengers()` - returns all of the passengers that a driver has taken on a trip
      passengers() {
        const passengerTrip = this.trips().map(trip => {
          return trip.passenger();
        });
        return passengerTrip;
      }

}

// `Passenger` class:
  class Passenger {
//   + A passenger has many trips, and has many drivers through trips.
//   + `new Passenger()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
        constructor(name) {
        this.name = name;
        this.id = passengerId++;
        store.passengers.push(this);
        }
//   + `trips()` - returns all of the trips that a passenger has taken

        trips() {
        const trips = store.trips.filter(trip => {
        return trip.passengerId == this.id;
            });
          return trips;
        }
//   + `drivers()` - returns all of the drivers that has taken a passenger on a trip
        drivers() {
          const driverTrip = this.trips().map(trip => {
          return trip.driver();
        });
        return driverTrip;
        }
    }

// `Trip` class:
    class Trip {
//   + A trip belongs to a driver and belongs to a passenger.

//   + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes `id`, `driverId`, and `passengerId`
    constructor(driver, passenger) {
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = tripId++;
        store.trips.push(this);
      }

//   + `driver()` - returns the driver associated with the trip
      driver() {
      const drivers = store.drivers.find(driver => {
        return driver.id === this.driverId;
      });
        return drivers;
      }

//   + `passenger()` - returns the passenger associated with the trip
        passenger() {
          const passenger=  store.passengers.find(passenger => {
        return passenger.id === this.passengerId;
        });
        return passenger;
        }
}
