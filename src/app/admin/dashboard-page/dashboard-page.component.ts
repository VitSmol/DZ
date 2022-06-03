import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';
import {MatDialog} from '@angular/material/dialog';
import { AddPageComponent } from '../add-page/add-page.component';

const block = document.getElementById(`hidden__block`)
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private doctorServ: DoctorService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(AddPageComponent, {
      width: `600px`,
    }
      )
  }
}
