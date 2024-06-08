export default (input: any, option: any = {}) => {
    let dateObj;

    // 如果无值，就用当前日期
    if (!input) {
        dateObj = new Date();
    }

    // 日期对象
    else if (typeof input == 'object' && input.constructor === Date) {
        dateObj = input;
    }

    // 否则就尝试创建日期对象
    else if (!option.inputFormat) {
        dateObj = new Date(input);
        if (dateObj + "" == "Invalid Date") {
            console.error("【dateFormat of uniQuery】非法的日期格式：" + input, dateObj);
            return "";
        }
    }

    // 年、月、日、时、分、秒
    let single: {
        [key: string]: string | number
    } = {
        yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 0, ss: 0
    };

    // 如果获取了日期实例
    if (dateObj) {

        single.yyyy = dateObj.getFullYear();
        single.MM = dateObj.getMonth() + 1;
        single.dd = dateObj.getDate();

        single.HH = dateObj.getHours();
        single.mm = dateObj.getMinutes();
        single.ss = dateObj.getSeconds();
    }

    // 否则只能借助 inputFormat 来解析
    else {
        let inputFormat = option.inputFormat + "", valIndex = 0;
        for (let index = 0; index < inputFormat.length; index++) {

            // 年
            if (inputFormat.substring(index, index + 4) == "yyyy") {
                single.yyyy = +input.substring(valIndex, valIndex + 4);

                valIndex += 4;
                index += 3;
            } else {
                let curFlag = inputFormat.substring(index, index + 2);
                if (["MM", "dd", "HH", "mm", "ss"].indexOf(curFlag) > -1) {
                    let valContent = input[valIndex];
                    if (/\d/.test(input[valIndex + 1])) {
                        valContent += input[valIndex + 1];
                        valIndex += 2;
                    } else {
                        valIndex += 1;
                    }

                    (single as any)[curFlag] = +valContent;
                    index += 1;
                } else {
                    valIndex += 1;
                }
            }
        }
    }

    if (single.MM as number < 10) single.MM = "0" + single.MM;
    if (single.dd as number < 10) single.dd = "0" + single.dd;
    if (single.HH as number < 10) single.HH = "0" + single.HH;
    if (single.mm as number < 10) single.mm = "0" + single.mm;
    if (single.ss as number < 10) single.ss = "0" + single.ss;

    let format = option.format || "yyyy/MM/dd";
    return format.replace("yyyy", single.yyyy).replace("MM", single.MM).replace("dd", single.dd).replace("HH", single.HH).replace("mm", single.mm).replace("ss", single.ss);
};