module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  url: env('MY_HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2', 'key3', 'key4']),
  },
});
