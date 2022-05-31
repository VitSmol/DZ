import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup
  submitted = false
  constructor() { }

  ngOnInit(): void {
      this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }
  submit() {
    // if (this.form.invalid) {
    //   return
    // }
    // this.submitted = true
    // const user = {
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }
    // this.auth.login(user).subscribe(res => {
    //   console.log(res);

    }
  }

