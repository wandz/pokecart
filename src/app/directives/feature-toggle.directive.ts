import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';
const config = require(`../../assets/config/config.${environment.name}.json`);

@Directive({
  selector: '[pokeFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input('pokeFeatureToggle') featureToggle: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (!config.featureToggle[this.featureToggle]) {
      this.el.nativeElement.parentNode.removeChild(this.el.nativeElement);
    }
  }
}
