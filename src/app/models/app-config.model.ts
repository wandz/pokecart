export interface IAppConfig {
  env: string;
  featureToggle: IFeatureToggle;
}

export interface IFeatureToggle {
  [name: string]: boolean;
}
