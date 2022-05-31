import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

import { AddPageComponent } from "./add-page/add-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    AddPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'doctor/:id/edit', component: EditPageComponent},
        {path: 'add', component: AddPageComponent},
      ]}
    ])
  ],
  exports: [RouterModule]
})

export class AdminModule {}
