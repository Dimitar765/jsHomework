import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarRentingServiceService {
  filteredCars: Car[] = [];
  // cars: Car[]= [];

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
  this.cars = this.cars.map((car)=> {
    if(car.id === carId){
      return {
        ...car,
        isRented: true,
      }
    }
    return car;
  })
  console.log('click', carId);
  console.log(this.cars);
  
  // this.changeDetectorRef.detectChanges();
  // console.log(this.cars);
  
  
    
}

onReturn(carId:number){
  this.cars = this.cars.map((car)=> {
    if(car.id === carId){
      return {
        ...car,
        isRented: false,
      }
    }
    return car;
  })  
}

  showAllCars (): Car[]{
    
    this.cars = this.cars
    return this.cars
    
  }
  showAvailable():Car []{
   return this.cars.filter(car => car.isRented === false);
    
    
    
    
    }

  onShowRented():Car[]{
    return this.filteredCars = this.cars.filter(car => car.isRented === true
  )
  }

}
