import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../shared/console.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  constructor(
    private sevice: ConsoleService
  ) { }

  name:string = `Vitaliy`
  surname: string = `Smolitskiy`
  age: number = 36


  ngOnInit(): void {
    this.sevice.log(`Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age} `)
  }
}
