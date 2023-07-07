import {ConfigType} from './config';
import createStoreRedux from './store';
import {ApisauceInstance, create} from 'apisauce';

/**
 * Сервисы приложения
 */
class Services {
  private _store: any;
  private _api: ApisauceInstance | undefined;

  constructor(private config: ConfigType) {}

  // Сервис АПИ
  get api(): ApisauceInstance {
    return (this._api ??= create({
      baseURL: this.config.api.baseURL,
    }));
  }

  // Сервис Redux store
  get store(): any {
    return (this._store ??= createStoreRedux(this, this.config.store));
  }
}

export default Services;
