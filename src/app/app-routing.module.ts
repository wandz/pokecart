import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptComponent } from './pages/adopt/adopt.component';
import { Page500Component } from './pages/page500/page500.component';
import { CartComponent } from './pages/cart/cart.component';


export const routes: Routes = [
  {path: '', component: AdoptComponent},
  {path: '500', component: Page500Component},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
