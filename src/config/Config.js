// 程序版本
const bundleVersion = '20180822';

// 环境设定 本地开发、正式环境
let environment = 'local';


const apiUrl = {
  // local: 'http://192.168.1.103/index.php/v1/',
  local: 'http://192.168.1.31/index.php/v1/',
  online: 'http://192.168.1.56',
};

const hd = 'px';

const Config = {
  bundleVersion,
  environment,
  url: apiUrl[environment],
  hd,
};

module.exports = Config;
