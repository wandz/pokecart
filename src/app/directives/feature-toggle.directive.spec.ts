import {FeatureToggleDirective} from './feature-toggle.directive';
import {render} from '@testing-library/angular';
import {withFeatureToggle} from 'testUtils';
import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleService} from '../services/feature-toggle.service';

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
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'disable-example': false}}, FeatureToggleService]
    });

    expect(component.queryByText('Pikachu')).toBeNull();
  });

  it('shows the child when the flag is true', async () => {
    withFeatureToggle(['enable-example']);

    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'enable-example'">Pikachu</div>`
    });

    expect(component.queryByText('Pikachu')).not.toBeNull();
  });
});
