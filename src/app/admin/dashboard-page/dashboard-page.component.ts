import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';

import { DoctorService } from 'src/app/shared/doctor.service';
import { AddPageComponent } from '../add-page/add-page.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {
  currentDate = new Date()
  displayedColumns: string[] = [
    'index',
    'lastname',
    'firstname',
    'fathername',
    'position',
    'mobile',
    'birthDate',
    'age',
    'conclusionContractDate',
    'expirationContractDate',
  ];
  dataSource: any
  doctorsArray: any[] = [];

  constructor(
    private doctorServ: DoctorService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): void {
    this.getDoctors()
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getDoctors() {
    this.doctorServ.getAll().subscribe(doctors => {
      this.doctorsArray = doctors.sort((a,b) => a.expirationContractDate - b.expirationContractDate)
      console.log(this.doctorsArray);
      this.dataSource = new MatTableDataSource(this.doctorsArray)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
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
  this.dataSource.filter = input.value.trim().toLowerCase();
}
  openDialog(){
    this.dialog.open(AddPageComponent, {
      width: `600px`,
    }
      )
  }
}
