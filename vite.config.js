export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Forward all `/api` requests to backend
    },
  },
};
