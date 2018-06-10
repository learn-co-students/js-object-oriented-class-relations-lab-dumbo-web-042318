let store = {drivers: [], passengers: [], trips: []}

driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips(){
    // returns all of the trips a driver has taken
    return store.trips.filter(trip => {
      return trip.driverId = this.id
    })
  }

  passengers(){
    // returns all of the passengers a driver has taken on a trip
    return store.passengers.filter(passenger =>{
      return passenger.driverId = this.id
    })
  }
}

passengerId = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips(){
    // returns all of the trips a passenger has taken
    return store.trips.filter(trip => {
      return trip.passengerId = this.id
    })
  }

  drivers(){
    // returns all of the drivers that has taken a passenger on a trip
    return store.drivers.filter(driver =>{
      return driver.passengerId = this.id
    })
  }
}

tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver(){
    // returns the driver associated with the trip
    return store.drivers.find(driver => {
      return driver.id = this.driverId
    })
  }

  passenger(){
    // returns the passenger associated with the trip
    return store.passengers.find(passenger => {
      return passenger.id = this.passengerId
    })
  }
}
