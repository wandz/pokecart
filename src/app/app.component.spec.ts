import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FeatureToggleDirective, FEATURE_TOGGLES_DI_TOKEN } from './directives/feature-toggle.directive';
import { render } from '@testing-library/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const component = await render(AppComponent, {
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: { 'show-title': true } }],
      declarations: [FeatureToggleDirective]
    });

    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
    const component = await render(AppComponent, {
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: { 'show-title': true } }],
      declarations: [FeatureToggleDirective]
    });

    expect(component.queryByText('pokecart app is running!')).not.toBeNull();
  });
});
