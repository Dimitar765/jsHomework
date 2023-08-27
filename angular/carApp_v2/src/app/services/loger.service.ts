import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor() { }

  message = 'custum loger service'

  logMessage = (message: string) => {
    console.log('msg from logger', message);
    
  }
}
