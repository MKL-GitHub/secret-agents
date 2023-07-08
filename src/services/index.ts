import {ApisauceInstance, create} from 'apisauce';
import {createContext} from 'react';

import {config, ConfigType} from './config';

/**
 * Сервисы приложения
 */
class Services {
  private _api: ApisauceInstance | undefined;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(private config: ConfigType) {}

  // Сервис АПИ
  get api(): ApisauceInstance {
    return (this._api ??= create({
      baseURL: this.config.api.baseURL
    }));
  }
}

const services = new Services(config);
const ServicesContext = createContext<Services>(services);

export {Services, ServicesContext, services};
