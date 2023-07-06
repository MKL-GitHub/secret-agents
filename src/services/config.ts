export type ConfigStoreType = {
  [key: string]: any,
}

export type ConfigType = {
  store: ConfigStoreType,
  api: {
    baseURL: string,
  },
};

export const config: ConfigType = {
  store: {

  },
  api: {
    baseURL: 'https://lzone.secret-agents.ru/api/v2',
  }
}