import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent {
@Input()
cars: Car[] = [];


@Output()
rented = new EventEmitter()

@Output()
notRented = new EventEmitter()

@Output()
reset = new EventEmitter()


Rented (){
  this.rented.emit()
}

NotRented (){
  this.notRented.emit()
}

Reset(){
  this.reset.emit()
}

}
