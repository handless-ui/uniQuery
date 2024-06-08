// 判断内容是否不为空
let notNull = (value: any) => {
    if (value === null || value === undefined) {
        return false
    }

    if (typeof value === 'string' && value.length < 1) {
        return false
    }

    return true
}

// 校验的具体实现,如果返回true表示合法,false表示非法

export default {

    // 1.必输
    required: (value: any, flag: boolean) => {

        if (flag) return notNull(value)

        // 如果不是必输,一定合法
        return true
    },

    // 2.最大长度
    maxLength: (value: any, num: number) => {
        return !notNull(value) || value.length <= num
    },

    // 3.最小长度
    minLength: (value: any, num: number) => {
        return !notNull(value) || value.length >= num
    },

    // 4.正则表达式
    regexp: (value: any, reg: string) => {
        return !notNull(value) || new RegExp(reg).test(value)
    },

    // 5.手机号码
    phone: (value: any, flag: boolean) => {

        // 手机号码
        if (flag) {
            return !notNull(value) ||
                /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/
                    .test(value)
        } else {
            return true
        }
    }

}