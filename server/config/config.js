const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://user:user@localhost:27017/sample'
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
