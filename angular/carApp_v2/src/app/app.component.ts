import { Component, OnInit } from '@angular/core';
import { Car } from './interfaces/car.interface';
import { LogerService } from './services/loger.service';
import { CarRentingServiceService } from './services/car-renting-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class 
AppComponent implements OnInit{

  constructor (private readonly logerService: LogerService,
    private readonly carRentingService: CarRentingServiceService
    ){
      console.log('msg from constructor');
      
  }

  ngOnInit(): void {
      this.logerService.logMessage('app-component')
      this.cars = this.carRentingService.showAllCars()
  }
  title = 'carApp';
  cars: Car[] = [];

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


}
