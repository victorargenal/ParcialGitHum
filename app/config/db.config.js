module.exports = {
  HOST: "ep-curly-dawn-ayjq76dt-pooler.c-5.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_7pdF9MfvGbiZ",
  DB: "neondb",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
