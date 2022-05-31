import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface doctorsElement {
  surname: string;
  name: string;
  fathername: string;
}

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


export class DoctorsComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['position', 'surname', 'name', 'fathername'];
  dataSource = new MatTableDataSource(doctors)

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
    } else {
      this._liveAnnouncer.announce(`Sorting cleared`)
    }
  }

  public doFilter = (input: any) => {
    // console.log(this.dataSource.filterPredicate(input, 'name'));
    this.dataSource.filter = input.value.trim().toLowerCase();
  }


  ngOnInit(): void {
    // this.dataSource.filterPredicate = function (record,filter) {
    //   console.log(record.name);
    //   return false
   }
  }

