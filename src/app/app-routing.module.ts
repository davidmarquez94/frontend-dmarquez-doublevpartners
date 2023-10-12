import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoubleVPartnersComponent } from './double-v-partners/double-v-partners.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path: '', component: DoubleVPartnersComponent},
  {path: 'view-user/:user_login', component: ViewUserComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
