// h5环境下区分具体环境

let env = "";

// #ifdef H5
let weixin = /MicroMessenger/i.test(window.navigator.userAgent);
let isWEAPP = window.__wxjs_environment === 'miniprogram';

// 微信小程序Webview
if (typeof wx !== 'undefined' && isWEAPP && weixin) {
	env = 'WeixinWebview';
}

// 公众号H5
else if (typeof wx !== 'undefined' && !isWEAPP && weixin) {
	env = 'WeixinH5';
}

// 支付宝H5
else if (typeof my !== 'undefined' && my.getEnv) {
	env = 'AlipayH5';
}

// 浏览器
else {
	env = 'Browser';
}
// #endif

export default env;