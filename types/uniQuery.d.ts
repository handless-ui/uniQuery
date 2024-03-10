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


        /**
         * 日期格式化
         * @param input 需要格式化的值
         * @param option 表示一些约束参数
         */
        dateFormat(input?: string | Date, option?: {

            /**
             * 输入格式
             */
            inputFormat?: string

            /**
             * 输出格式
             */
            format?: string
        }): string

        /**
         * 数字格式化
         * @param input 需要格式化的值	
         */
        numberFormat(input: number | string): string

    }
}