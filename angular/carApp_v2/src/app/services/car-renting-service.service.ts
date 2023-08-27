import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarRentingServiceService {

  constructor() { }

     garage: Car[] = 
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

  showAllCars (): Car[]{
    const cars = this.garage
    console.log(cars);
    return cars;
    
  }

}
