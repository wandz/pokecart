import {ShowIfIsBrowserDirective} from './show-if-is-browser.directive';
import {render} from '@testing-library/angular';
import {PLATFORM_ID} from '@angular/core';

describe('ShowIfIsBrowserDirective', () => {
  it('shows component when is in browser', async () => {
    const component = await render(ShowIfIsBrowserDirective, {
      template: '<div pokeShowIfIsBrowser>Hello from browser</div>',
      providers: [{
        provide: PLATFORM_ID, useValue: 'browser'
      }]
    });

    expect(component.queryByText('Hello from browser')).not.toBeNull();
  });

  it('hides component when is in server', async () => {
    const component = await render(ShowIfIsBrowserDirective, {
      template: '<div pokeShowIfIsBrowser>Hello from browser</div>',
      providers: [{
        provide: PLATFORM_ID, useValue: 'server'
      }]
    });

    expect(component.queryByText('Hello from browser')).toBeNull();
  });
});
