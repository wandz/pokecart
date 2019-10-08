import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureToggleDirective, FEATURE_TOGGLES_DI_TOKEN } from './directives/feature-toggle.directive';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FeatureToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: FEATURE_TOGGLES_DI_TOKEN, useValue: require(`../assets/config/config.${environment.name}.json`).featureToggle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
