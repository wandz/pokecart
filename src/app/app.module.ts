import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureToggleDirective, FEATURE_TOGGLES_DI_TOKEN } from './directives/feature-toggle.directive';
import { environment } from 'src/environments/environment';
import { CardComponent } from './components/card/card.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleDirective,
    CardComponent
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
