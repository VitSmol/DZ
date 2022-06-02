import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mergeMap, Observable } from 'rxjs';
import { DoctorService } from '../shared/doctor.service';

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
  displayedColumns: string[] = ['position', 'lastname', 'firstname', 'fathername'];
  dataSource: any
  //  = new MatTableDataSource(doctors)
  doctorsArray: any[] = [];
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private doctorServ: DoctorService
    ) {}

    ngOnInit(): void {
      this.getDoctors()
    }
    @ViewChild(MatSort) sort!: MatSort;

    getDoctors() {
      this.doctorServ.getAll().subscribe(doctors => {
        this.doctorsArray = doctors
        console.log(this.doctorsArray);
        this.dataSource = new MatTableDataSource(this.doctorsArray)
        this.dataSource.sort = this.sort
      })
    }

    ngAfterViewInit(): void {
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



  }

