import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { N2ListComponent } from './n2-list/n2-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: N2ListComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
