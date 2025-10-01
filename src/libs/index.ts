import getSystemInfo from "./getSystemInfo";
import getLocation from "./getLocation";
import saveAlbum from "./saveAlbum";
import chooseImage from "./chooseImage";

// API
(uni.$uniQuery as {
	[key: string]: any
}) = {
	getSystemInfo,
	getLocation,
	saveAlbum,
	chooseImage
};

// 参数
(uni as any)._uniQuery = {};

// 方法
let methods = {
	uniQueryAPI(apiName: string, ...params: Array<any>) {
		return (uni as any).$uniQuery[apiName](...params);
	}
};

export default {
	install(Vue: any, options = {}) {
		if (Vue.prototype) {
			for (let key in methods) {
				Vue.prototype[key] = (methods as any)[key];
			}
		} else {
			Vue.mixin({
				methods
			});
		}

		(uni as any)._uniQuery.validate = (options as any).validate || {};
	}
};