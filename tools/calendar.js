// 计算某月多少天
export let calcDays = function (year, month) {
    if (month == 2) {

        if ((year % 4 != 0) || (year % 100 == 0 && year % 400 != 0)) {
            return 28;
        } else {
            return 29;
        }

    } else {
        return [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
    }
};

// 计算某月日历视图的天数组
export let calcDaysArray = function (year, month) {
    let daysArray = [];

    // 0->周日 1->周一 ... 6->周六
    let index = new Date(year + '/' + month + '/1').getDay();

    // 前置多少天
    let preNum = index - 1;
    if (preNum == -1) preNum = 6;

    let preMonthDays = calcDays(month == 1 ? year - 1 : year, month == 1 ? 12 : month - 1);
    for (let i = 0; i < preNum; i++) {
        daysArray.push({
            value: preMonthDays - i + 1,
            type: "pre"
        });
    }

    // 本月多少天
    let curNum = calcDays(year, month);
    for (let i = 1; i <= curNum; i++) {
        daysArray.push({
            value: i,
            type: "day"
        });
    }

    // 后置多少天
    let nextNum = 42 - preNum - curNum;
    for (let i = 1; i <= nextNum; i++) {
        daysArray.push({
            value: i,
            type: "next"
        });
    }

    return daysArray;
}