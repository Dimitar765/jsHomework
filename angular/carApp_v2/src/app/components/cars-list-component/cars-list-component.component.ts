import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingServiceService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-cars-list-component',
  templateUrl: './cars-list-component.component.html',
  styleUrls: ['./cars-list-component.component.css']
})
export class CarsListComponentComponent implements OnInit{
  constructor(private readonly carRentingService: CarRentingServiceService){}
  cars: Car[] = [];
  ngOnInit(): void {
      this.cars = this.carRentingService.showAllCars()
  }


  // @Input()
  // cars: Car[] = [];
  @Input()
  garage: Car[] = [];

  // rentedCars: Car[] = [];
  // availableCars: Car[] = [];
  filteredars: Car[] = []

  @Output()
  carIdStart = new EventEmitter<number>()

  @Output()
  carIdReturn = new EventEmitter<number>()
  
onShowRented(){
  this.filteredars = this.cars.filter(car => car.isRented === true
  )
  this.cars = this.filteredars   
  console.log('click');
  
 
}
onShowAvailable(){
  
  this.filteredars = this.cars.filter(car => car.isRented === false)
  this.cars = this.filteredars
  
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
