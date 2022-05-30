import { Component } from '@angular/core';

export interface doctorsElement {
  surname: string;
  name: string;
  fathername: string;
}

// const ELEMENT_DATA: doctorsElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const doctors: doctorsElement[] = [
  {surname: 'Бугаков', name: 'Владимир',fathername: 'Алексеевич'},
  {surname: 'Приступин', name: 'Михаил',fathername: 'Борисович'},
  {surname: 'Ижаковский', name: 'Вячеслав',fathername: 'Станиславович'},
]

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})


export class DoctorsComponent{
  displayedColumns: string[] = ['position', 'surname', 'name', 'fathername'];
  dataSource = doctors;

  // displayedColumns: string[] = ['№', 'Фамилия', 'Имя', 'Отчество'];
    // dataSource = doctors;
}
