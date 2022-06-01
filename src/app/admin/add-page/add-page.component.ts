import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.sass']
})
export class AddPageComponent implements OnInit {
  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      uz: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      fathername: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      conclusionContractDate: new FormControl(null, Validators.required),
      expirationContractDate: new FormControl(null, Validators.required),
    })
  }
  submit(){
   if (this.form.invalid) {
    return
   }
   const doctor = {
     uz: this.form.value.uz,
     lastname: this.form.value.lastname,
     firstname: this.form.value.firstname,
     fathername: this.form.value.fathername,
     position: this.form.value.position,
     mobile: this.form.value.mobile,
     birthDate: this.form.value.birthDate,
     conclusionContractDate: new Date(this.form.value.conclusionContractDate),
     expirationContractDate: new Date(this.form.value.expirationContractDate),
   }

   console.log(doctor);

  }

}
