import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// 页面
import Pages from './pages/Pages';

// 函数
import config from './config/Config';
import Http from '@utils/Http';
// 全局函数
window.api = Http;
window.App = {
  config,

};

ReactDOM.render(
  <Router>
    <Pages />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();