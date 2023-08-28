import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingServiceService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-cars-list-component',
  templateUrl: './cars-list-component.component.html',
  styleUrls: ['./cars-list-component.component.css'],

})
export class CarsListComponentComponent implements OnInit {
  constructor(private readonly carRentingService: CarRentingServiceService) { }

  cars: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carRentingService.showAllCars()

  }

  @Output()
  carIdStart = new EventEmitter<number>()

  @Output()
  carIdReturn = new EventEmitter<number>()


  rented() {
    this.cars = this.carRentingService.onShowRented()
  }

  available() {
    this.cars = this.carRentingService.showAvailable()
  }

  onReset() {
    this.cars = this.carRentingService.showAllCars()
  }


  Rent(carId: number) {

    this.carIdStart.emit(carId)
  }

  Return(carId: number) {
    this.carIdReturn.emit(carId)
  }

}
