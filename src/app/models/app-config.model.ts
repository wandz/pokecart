export interface IAppConfig {
    env: string;
    featureToggle: {
        [name: string]: boolean;
    };
}
