module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9133fb09344b757491645ea05222aeba'),
  },
});
