import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AV from 'leancloud-storage';

AV.init({
      appId: '1k0VJ8utD1ElnG8ecxnORrcK-gzGzoHsz',
      appKey: '9BnyPpD91ixcpYzCbWNt55FU'
    });

    // 使用 JavaScript 的 API 查询云存储中的数据。
    new AV.Query('Todo').find().then(function(todos) {
      console.log(todos);
      console.log("leancloud Ready")
    }).catch(function(err) {
      console.log(err)
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
