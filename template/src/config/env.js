const ENV = process.env.NODE_ENV;
console.info("env: ", ENV);
const env = {
  // 开发环境
  development: {
    baseURL: "http://192.168.2.101:3000/",
    timeout: 20000
  },
  // 生产环境
  production: {
    baseURL: "http://youhost/",
    timeout: 15000
  }
};

export default env[ENV];
