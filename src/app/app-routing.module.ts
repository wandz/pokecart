import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptComponent } from './pages/adopt/adopt.component';


const routes: Routes = [
  {path: '', redirectTo: 'adopt', pathMatch: 'full'},
  {path: 'adopt', component: AdoptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
