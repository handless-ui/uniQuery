/**
 * InputVercode组件ref使用
 * 
 * let inputVercodeRef = ref\<UQInputVercodeType\>();
 */
declare type UQInputVercodeType = {

    /**
    * 打开短信验证码输入框，输入就then，否则catch
    */
    open({
        "phone": string
    }): Promise<string>
}