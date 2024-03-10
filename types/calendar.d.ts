/**
 * Calendar组件ref使用
 * 
 * let calendarRef = ref\<UQCalendarType\>();
 */

type ValueType = {
    "year": number
    "month": number
    "day": number
}

declare type UQCalendarType = {

    /**
     * 打开日历
     * @param value 
     */
    open(value?: ValueType): Promise<ValueType>

}