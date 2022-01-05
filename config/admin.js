module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0e83963bd4472fe192ea9f0e0129b53d'),
  },
});
