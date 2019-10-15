import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureToggleDirective, FEATURE_TOGGLES_DI_TOKEN } from './directives/feature-toggle.directive';
import { environment } from 'src/environments/environment';
import { CardComponent } from './components/card/card.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { AdoptComponent } from './pages/adopt/adopt.component';
import { Page500Component } from './pages/page500/page500.component';
import { CartCountComponent } from './components/cart-count/cart-count.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { PokemonSpriteComponent } from './components/pokemon-sprite/pokemon-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleDirective,
    CardComponent,
    CardListComponent,
    AdoptComponent,
    Page500Component,
    CartCountComponent,
    CartItemComponent,
    PokemonSpriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: FEATURE_TOGGLES_DI_TOKEN, useValue: require(`../assets/config/config.${environment.name}.json`).featureToggle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
