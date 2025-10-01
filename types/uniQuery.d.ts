interface Uni {

    /**
     * uniQuery 全局API
     */
    $uniQuery: {

        /**
         * 获取平台信息
         */
        getSystemInfo(): Promise<{
            /**
             * 状态栏
             */
            statusBar: {
                height: number
            },

            /**
             * 标题栏
             */
            title: {
                height: number
            }
        }>

        /**
         * 获取地理位置
         */
        getLocation(): Promise<{

            /**
             * 经度
             */
            longitude: number

            /**
             * 纬度
             */
            latitude: number
        }>

        /**
         * 保存图片到相册
         * @param url 需要保存到相册的图片地址
         */
        saveAlbum(url: string): Promise<any>

        /**
         * 选择图片
         */
        chooseImage(): Promise<Array<string>>

    }
}