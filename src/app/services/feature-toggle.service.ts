import {Inject, Injectable, InjectionToken} from '@angular/core';
import {IFeatureToggle} from '../models/app-config.model';

export const FEATURE_TOGGLES_DI_TOKEN = new InjectionToken<IFeatureToggle>('FEATURE_TOGGLES_DI_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  constructor(@Inject(FEATURE_TOGGLES_DI_TOKEN) private toggles: IFeatureToggle) {
  }

  isActive(feature: string) {
    return this.toggles[feature];
  }
}
