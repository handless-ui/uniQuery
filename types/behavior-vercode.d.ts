/**
 * BehaviorVercode组件ref使用
 * 
 * let behaviorVercodeRef = ref\<UQBehaviorVercodeType\>();
 */
declare type UQBehaviorVercodeType = {

    /**
    * 如果校验通过then，否则catch
    */
    open(): Promise<void>

}