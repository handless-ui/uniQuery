import getSystemInfo from "./getSystemInfo";
import getLocation from "./getLocation";
import saveAlbum from "./saveAlbum";
import chooseImage from "./chooseImage";
import dateFormat from "./dateFormat";
import numberFormat from "./numberFormat";

// API
uni.$uniQuery = {
	getSystemInfo,
	getLocation,
	saveAlbum,
	chooseImage,
	dateFormat,
	numberFormat
};

// 参数
uni._uniQuery = {};

// 方法
let methods = {
	uniQueryAPI(apiName, ...params) {
		return uni.$uniQuery[apiName](...params);
	}
};

export default {
	install(Vue, options = {}) {
		if (Vue.prototype) {
			for (let key in methods) {
				Vue.prototype[key] = methods[key];
			}
		} else {
			Vue.mixin({
				methods
			});
		}

		uni._uniQuery.validate = options.validate || {};
	}
};