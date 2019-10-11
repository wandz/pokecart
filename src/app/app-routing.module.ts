import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptComponent } from './pages/adopt/adopt.component';
import {Page500Component} from './pages/page500/page500.component';


export const routes: Routes = [
  {path: '', redirectTo: 'adopt', pathMatch: 'full'},
  {path: 'adopt', component: AdoptComponent},
  {path: '500', component: Page500Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
