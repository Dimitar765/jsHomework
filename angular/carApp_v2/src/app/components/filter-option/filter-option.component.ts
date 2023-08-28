import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingServiceService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css'],

})
export class FilterOptionComponent implements OnInit {
  constructor(private readonly carRentingService: CarRentingServiceService) {

  }

  // cars: Car[] = []
  ngOnInit(): void {
    // this.cars = this.carRentingService.showAllCars()
  }


  @Output()
  rented = new EventEmitter()

  @Output()
  notRented = new EventEmitter()

  @Output()
  reset = new EventEmitter()


  Rented() {
    this.rented.emit()
  }

  NotRented() {
    this.notRented.emit()
  }

  Reset() {
    this.reset.emit()
  }

}
