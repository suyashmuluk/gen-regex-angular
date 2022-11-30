import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenRegexAngular {

  constructor() { }

  regexpattern(str: string) {
    if (str && str !== '') {
      if (str === 'mail') {
        return '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$';
      } else if (str === 'pan') {
        return '^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$'
      } else if (str === 'aadhar') {
        return '^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$'
      } else if (str === 'gst') {
        return '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
      }
    } else {
      console.error('function regexpattern() requires 1 parameter');
    }
    return '';
  }
}
