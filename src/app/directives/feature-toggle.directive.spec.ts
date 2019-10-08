import { FeatureToggleDirective } from './feature-toggle.directive';
import { render } from '@testing-library/angular';

describe('FeatureToggleDirective', () => {
  it('hides the child when the flag is false', async () => {
    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'disable-example'">Pikachu</div>`
    });

    expect(component.queryByText('Pikachu')).toBeNull();
  });
  it('shows the child when the flag is true', async () => {
    const component = await render(FeatureToggleDirective, {
      template: `<div [pokeFeatureToggle]="'enable-example'">Pikachu</div>`
    });

    expect(component.queryByText('Pikachu')).not.toBeNull();
  });
});
