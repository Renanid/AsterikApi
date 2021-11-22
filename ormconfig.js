module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  synchronize: true,
  logging: false,
  entities: ['./src/entity/*'],
  migrations: ['./src/migration/*{.ts,.js}'],
  subscribers: ['./src/subscriber/*{.ts,.js}'],
  cli: {
    entitiesDir: './src/entity',
    migrationsDir: './src/migration',
    subscribersDir: './src/subscriber',
  },
};
