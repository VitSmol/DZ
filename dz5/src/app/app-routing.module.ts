import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';

import { HeaderComponent } from "./shared/header/header.component";
const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: AllNewsComponent},
      {path: 'edit', component: EditNewsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
