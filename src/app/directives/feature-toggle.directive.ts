import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FeatureToggleService} from '../services/feature-toggle.service';

@Directive({
  selector: '[pokeFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input('pokeFeatureToggle') featureToggle: string;

  constructor(
    private el: ElementRef,
    private featureToggleService: FeatureToggleService) {
  }

  ngOnInit() {
    if (!this.featureToggleService.isActive(this.featureToggle)) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
