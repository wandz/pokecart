import {Directive, ElementRef, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[pokeShowIfIsBrowser]'
})
export class ShowIfIsBrowserDirective {

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private el: ElementRef) {
    const isBrowser = isPlatformBrowser(this.platformId);
    if (!isBrowser) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
