import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DisabledComponent } from './disabled/disabled.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'disabled'
    component: DisabledComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
