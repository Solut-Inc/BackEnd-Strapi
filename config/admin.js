module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d74b681ae5aab41bdac056fcc9603fb'),
  },
});
