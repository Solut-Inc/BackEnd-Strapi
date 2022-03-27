module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 33062),
      database: env('DATABASE_NAME', 'back_dandy'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'secret'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
