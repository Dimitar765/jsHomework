import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list-component',
  templateUrl: './cars-list-component.component.html',
  styleUrls: ['./cars-list-component.component.css']
})
export class CarsListComponentComponent {
  @Input()
  cars: Car[] = [];
  @Input()
  garage: Car[] = [];

  rentedCars: Car[] = [];
  availableCars: Car[] = [];

  @Output()
  carIdStart = new EventEmitter<number>()

  @Output()
  carIdReturn = new EventEmitter<number>()
  
onShowRented(){
  this.rentedCars = this.cars.filter(car => car.isRented === true
  )
  this.cars = this.rentedCars   
 
}
onShowAvailable(){
  
}

onReset (){
  this.cars = this.garage
 
}

Rent(carId: number){
 this.carIdStart.emit(carId)
 
}

Return(carId: number) {
  this.carIdReturn.emit(carId)
  
}

}
