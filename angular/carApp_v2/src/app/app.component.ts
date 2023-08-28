import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Car } from './interfaces/car.interface';
import { LogerService } from './services/loger.service';
import { CarRentingServiceService } from './services/car-renting-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class
  AppComponent implements OnInit {
  // filteredcars: Car[] = [];

  constructor(private readonly logerService: LogerService,
    private readonly carRentingService: CarRentingServiceService,
    // private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    console.log('msg from constructor');

  }

  ngOnInit(): void {
    this.logerService.logMessage('app-component')
    this.cars = this.carRentingService.showAllCars()
  }
  title = 'carApp';
  cars: Car[] = [];

  rent(carId: number) {
    this.carRentingService.onRent(carId)
  }


  return(carId: number) {
    this.carRentingService.onReturn(carId)
  }


}
