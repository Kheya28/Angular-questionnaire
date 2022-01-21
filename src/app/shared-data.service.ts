import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SharedDataService {

  userInfo: any;

  ELEMENT_DATA: form[] = [
    { name: "Kheya", created_on: '1/17/2022' },
    { name: "Nishad", created_on: '1/18/2022' },
    { name: "jahan", created_on: '1/19/2022' },
    { name: "Intern", created_on: '1/20/2022' },
    { name: "Selise", created_on: '1/21/2022' }
  ];

  constructor() { }


}

export interface form {
  name: string;
  created_on: string;
}