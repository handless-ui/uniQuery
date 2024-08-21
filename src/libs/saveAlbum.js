export default (url) => {
	return new Promise((resolve, reject) => {
		// #ifdef H5

		let aEl = document.createElement("a");
		aEl.href = url;
		aEl.download = "图片.png";
		aEl.click();
		resolve();

		// #endif

		// #ifdef MP

		let doSave = (authback) => {
			uni.saveImageToPhotosAlbum({
				filePath: url,
				success: () => {
					resolve();
				},
				fail: (err) => {
					if (authback) {
						authback();
					} else {
						reject(err);
					}
				},
			})
		};

		doSave(() => {
			let authName = "scope.writePhotosAlbum"

			// #ifdef MP-ALIPAY

			// 苹果
			if (uni.getSystemInfoSync().osName == "ios") {
				authName = "album"
			}

			// 安卓
			else {
				authName = "writePhotosAlbum"
			}
			// #endif

			uni.authorize({
				scope: "scope.writePhotosAlbum",
				success() {
					doSave()
				},
				fail: () => {
					uni.getSetting({
						success: (res) => {
							if (res.authSetting[authName]) {
								doSave()
							} else {
								uni.openSetting({
									success(res) {
										if (res.authSetting[authName]) {
											doSave();
										} else {
											reject("未授权");
										}
									}
								})
							}
						},
					})
				},
			})
		});

		// #endif

	});
};