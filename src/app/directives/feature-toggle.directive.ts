import { Directive, Input, OnInit, ElementRef, InjectionToken, Inject } from '@angular/core';
import { IFeatureToggle } from '../models/app-config.model';

export const FEATURE_TOGGLES_DI_TOKEN = new InjectionToken<IFeatureToggle>('FEATURE_TOGGLES_DI_TOKEN');

@Directive({
  selector: '[pokeFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input('pokeFeatureToggle') featureToggle: string;

  constructor(
    private el: ElementRef,
    @Inject(FEATURE_TOGGLES_DI_TOKEN) private toggles: IFeatureToggle) {
  }

  ngOnInit() {
    if (!this.toggles[this.featureToggle]) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
