/**
 * Form组件ref使用
 * 
 * let formRef = ref\<UQFormType\>();
 */
declare type UQFormType = {

    /**
     * 如果表单合法then，否则catch
     */
    submit(): Promise<void>
}