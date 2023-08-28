import { EventEmitter, Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarRentingServiceService {

  // fileredCars: Car[] = [];

  constructor() { }

  cars: Car[] =
    [{
      id: 1,
      model: 'test',
      engineType: 'diesel',
      yearOfProduction: '1991',
      priceToRent: 100,
      image: 'xyz',
      isRented: true
    },
    {
      id: 2,
      model: 'test2',
      engineType: 'diesel',
      yearOfProduction: '1993',
      priceToRent: 100,
      image: 'xyz',
      isRented: false
    },
    {
      id: 3,
      model: 'test3',
      engineType: 'diesel',
      yearOfProduction: '2111',
      priceToRent: 100,
      image: 'xyz',
      isRented: false
    }
    ]

  onRent(carId: number) {
    this.cars = this.cars.map((car) => {
      if (car.id === carId) {
        return {
          ...car,
          isRented: true,
        }
      }
      return car;
    })

  }

  onReturn(carId: number) {
    this.cars = this.cars.map((car) => {
      if (car.id === carId) {
        return {
          ...car,
          isRented: false,
        }
      }
      return car;
    })
  }

  showAllCars(): Car[] {
    return this.cars
  }

  showAvailable(): Car[] {
    return this.cars.filter(car => car.isRented === false);
  }

  onShowRented(): Car[] {
    return this.cars.filter(car => car.isRented === true
    )
  }

}
