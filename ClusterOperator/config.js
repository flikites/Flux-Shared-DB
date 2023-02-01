module.exports = {
  dbHost: process.env.DB_COMPONENT_NAME || 'localhost',
  dbType: 'mysql',
  dbUser: 'root',
  dbPass: process.env.DB_INIT_PASS || 'secret',
  dbPort: 3306,
  dbBacklog: 'flux_backlog',
  dbBacklogCollection: 'backlog',
  dbBacklogBuffer: 'backlog_buffer',
  dbOptions: 'options',
  dbInitDB: process.env.INIT_DB_NAME || 'test_db',
  connectionServer: 'mysql',
  externalDBPort: 3307,
  apiPort: 7071,
  debugUIPort: 8008,
  containerDBPort: process.env.DB_PORT || 33949,
  containerApiPort: process.env.API_PORT || 33950,
  DBAppName: process.env.DB_APPNAME || 'wordpressonflux',
  AppName: process.env.CLIENT_APPNAME || '',
  version: '1.1.6',
  whiteListedIps: process.env.WHITELIST || '::1',
  debugMode: 'off',
};
