import { createSSRApp } from "vue";
import App from "./App.vue";
import validate from './validate';

// 引入全局uniQuery
import uniQuery from './libs/index';

// #ifdef H5
import Zdebug from 'zdebug.js';
Zdebug();

import wx from 'wechat-offiaccount';

// 微信公众号
if (/MicroMessenger/i.test(window.navigator.userAgent)) {
  window.wx = wx;

  uni.request({
    url: "http://" + window.location.hostname + ":8090/JsApiSignature?url=" + window.location.href.split('#')[0],
    method: "GET",
    success: function (res) {
      wx.config({
        debug: true,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: ['chooseImage', 'getLocation'] // 必填，需要使用的JS接口列表
      })

      wx.error(function (err) {
        console.error(err)
      })
    }
  });
}
// #endif

export function createApp() {
  const app = createSSRApp(App);

  app.use(uniQuery, {
    validate
  });

  return {
    app
  };
}
