import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';

import { DoctorService } from 'src/app/shared/doctor.service';
import { AddPageComponent } from '../add-page/add-page.component';
import { Subscription } from 'rxjs';

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
    'edit',
    'delete',
  ];
  dataSource: any
  doctorsArray: any[] = [];
  removeSub!: Subscription

  constructor(
    private doctorServ: DoctorService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): any {
    this.getDoctors()
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getDoctors() {
    this.doctorServ.getAll().subscribe(doctors => {
      this.doctorsArray = doctors.sort((a,b) => a.expirationContractDate - b.expirationContractDate)
      this.dataSource = new MatTableDataSource(this.doctorsArray)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
      console.log(`fetch is done`);

    })
  }

  ngAfterViewInit(): void {
}

ngOnDestroy() {
  if (this.removeSub) {
    this.removeSub.unsubscribe()
  }
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
    let dialogRef = this.dialog.open(AddPageComponent, {
      width: `600px`,
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // let This = this
        setTimeout(() => {
          this.getDoctors()
        }, 1500)
        // this.getDoctors()
      }
    })
  }

remove(id: any) {
  this.removeSub = this.doctorServ.remove(id).subscribe(() => {
    this.dataSource = new MatTableDataSource(this.doctorsArray.filter((doctor: any) => doctor.id != id))
  })
  this.getDoctors()
}
}
