export default () => {
	return new Promise((resolve, reject) => {

		let doChoose = () => {
			uni.chooseImage({
				success: function(res) {
					resolve(res.tempFilePaths);
				},
				fail: function(err) {
					reject(err);
				},
			});
		};

		// #ifdef H5

		// 微信公众号
		if (/MicroMessenger/i.test(window.navigator.userAgent) && typeof wx !== 'undefined') {

			wx.ready(function() {
				wx.chooseImage({
					success: function(res1) {
						let result = [];
						(function doit(index) {
							wx.getLocalImgData({
								localId: res1.localIds[index - 1],
								success: function(res2) {
									let data = null;
									if (res2.localData.startsWith(
											'data:image')) {
										data = res2.localData;
									} else {
										// 适配安卓手机
										data = 'data:image/jpeg;base64,' +
											res2.localData.replace(/\n/g,
												'');
									}
									result.push(data);
									if (index >= res1.localIds.length) {
										resolve(result);
									} else {
										doit(index + 1);
									}
								},
								fail: function(err) {
									reject(err);
								},
							});
						})(1);
					},
					fail: function(err) {
						reject(err);
					},
				});
			});

		} else {
			doChoose();
		}
		// #endif

		// #ifdef MP
		doChoose();
		// #endif

	});
};