const store = {
    drivers: [],
    passengers: [],
    trips: []
}

let driverId = 0
class Driver {
    
    constructor(name) {
        this.name = name
        this.id = ++driverId
        store.drivers.push(this)
    }

    trips() {
        const trips = store.trips.filter(trip => {
            return trip.driverId === this.id
        })
        return trips;
    }

    passengers() {
        const trips = this.trips()
        const passengers = []
        for (const passenger of store.passengers) {
            for (const trip of trips) {
                if (passenger.id === trip.passengerId) {
                    passengers.push(passenger)
                }
            }
        }
        return passengers;
    }

}

let passengerId = 0
class Passenger {
    constructor(name) {
        this.name = name
        this.id = ++passengerId
        store.passengers.push(this)
    }

    trips() {
        const trips = store.trips.filter(trip => {
           return trip.passengerId === this.id
        })
        return trips;
    }

    drivers() {
        const trips = this.trips()
        const drivers = []
        for (const driver of store.drivers) {
            for (const trip of trips) {
                if (trip.driverId === driver.id) {
                    drivers.push(driver)
                }
            }
        }
        return drivers;
    }

}

let tripId = 0
class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId
        this.driverId = driver.id
        this.passengerId = passenger.id
        store.trips.push(this)
    }

    passenger() {
        const passenger = store.passengers.find(passenger => {
            return this.passengerId === passenger.id
        })
        return passenger;
    }

    driver() {
        const driver = store.drivers.find(driver => {
            return this.driverId === driver.id
        })
        return driver;
    }

}