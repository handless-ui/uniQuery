export default () => {
	return new Promise((resolve, reject) => {

		let doChoose = (callback: Function) => {
			uni.chooseImage({
				success: function (res) {
					callback(res.tempFilePaths);
				},
				fail: function (err) {
					reject(err);
				},
			});
		};

		// #ifdef H5

		// 微信公众号
		if (/MicroMessenger/i.test(window.navigator.userAgent) && typeof wx !== 'undefined') {

			wx.ready(function () {
				wx.chooseImage({
					success(res1) {
						let result = [];
						(function doit(index: number) {
							wx.getLocalImgData({
								localId: res1.localIds[index - 1],
								success(res2) {
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
								fail(err) {
									reject(err);
								},
							});
						})(1);
					},
					fail(err) {
						reject(err);
					},
					cancel() {

					},
				});
			});

		} else {
			doChoose(function (tempFilePaths: Array<string>) {
				let result = [];
				(function doit(index: number) {
					if (index > tempFilePaths.length) {
						resolve(result);
					} else {

						let xhr = new XMLHttpRequest();
						xhr.open('GET', tempFilePaths[index - 1], true);
						xhr.responseType = "blob";
						xhr.onload = function () {
							if (this.status === 200) {
								let fileReader = new FileReader();
								fileReader.onload = function (e) {
									result.push(e.target.result);
									doit(index + 1);
								}
								fileReader.readAsDataURL(xhr.response);
							}
						};
						xhr.send();
					}
				})(1);
			});
		}
		// #endif

		// #ifdef MP
		doChoose(function (tempFilePaths: Array<string>) {
			// #ifdef MP-WEIXIN
			let result = [];
			(function doit(index: number) {
				if (index > tempFilePaths.length) {
					resolve(result);
				} else {
					wx.getFileSystemManager().readFile({
						filePath: tempFilePaths[index - 1],
						encoding: 'base64',
						success: function (res: any) {
							result.push('data:image/png;base64,' + res.data);
							doit(index + 1);
						}
					})
				}
			})(1);
			// #endif
			// #ifndef MP-WEIXIN
			resolve(tempFilePaths);
			// #endif
		});
		// #endif

	});
};