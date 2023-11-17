export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  databaseURL: process.env.DB_URL,
});
