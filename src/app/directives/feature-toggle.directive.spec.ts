import { FeatureToggleDirective, FEATURE_TOGGLES_DI_TOKEN } from './feature-toggle.directive';
import { render } from '@testing-library/angular';
import { TestBed } from '@angular/core/testing';

describe('FeatureToggleDirective', () => {

  it('hides the child when the config is missing', async () => {
    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'disable-example'">Pikachu</div>`,
    });

    expect(component.queryByText('Pikachu')).toBeNull();
  });

  it('hides the child when the flag is false', async () => {
    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'disable-example'">Pikachu</div>`,
      providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: { 'disable-example': false } }]
    });

    expect(component.queryByText('Pikachu')).toBeNull();
  });

  it('shows the child when the flag is true', async () => {
    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'enable-example'">Pikachu</div>`,
      providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: { 'enable-example': true } }]
    });

    expect(component.queryByText('Pikachu')).not.toBeNull();
  });
});
